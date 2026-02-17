import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Asset, CoincapAssetId, CoincapResponse, Exchange } from '@doge/core/models';
import { toNumber } from '@doge/core/utils';
import { catchError, finalize, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoincapService {
  readonly #http = inject(HttpClient);

  readonly baseUrl = 'https://rest.coincap.io/v3';

  apiKey = (globalThis as { __COINCAP_API_KEY__?: string }).__COINCAP_API_KEY__ as
    | string
    | undefined;
  headers = this.apiKey ? new HttpHeaders({ Authorization: `Bearer ${this.apiKey}` }) : undefined;

  readonly #isLoadingAssets = signal(false);
  readonly isLoadingAssets = this.#isLoadingAssets.asReadonly();

  readonly #isLoadingTopExchange = signal(false);
  readonly isLoadingTopExchange = this.#isLoadingTopExchange.asReadonly();

  readonly assetsError = signal<string | null>(null);
  readonly topExchangeError = signal<string | null>(null);

  getAssets(ids: CoincapAssetId[]): Observable<Asset[]> {
    const params = new URLSearchParams({ ids: ids.join(',') });

    this.#isLoadingAssets.set(true);
    this.assetsError.set(null);

    return this.#http
      .get<
        CoincapResponse<Asset[]>
      >(`${this.baseUrl}/assets?${params.toString()}`, this.headers ? { headers: this.headers } : undefined)
      .pipe(
        map((res) =>
          (res.data ?? []).map((a) => ({
            id: a.id,
            symbol: a.symbol,
            name: a.name,
            priceUsd: toNumber(a.priceUsd),
            changePercent24Hr: toNumber(a.changePercent24Hr),
          })),
        ),
        catchError((err) => {
          this.assetsError.set('Failed to load assets. Please try again later.');
          return throwError(() => err);
        }),
        finalize(() => this.#isLoadingAssets.set(false)),
      );
  }

  getTopExchangeBy24hVolume(): Observable<Exchange> {
    // The API returns the exchanges sorted by 24h volume, so the first one is the top exchange
    const limit = 1;
    const params = new URLSearchParams({ limit: limit.toString() });

    this.#isLoadingTopExchange.set(true);
    this.topExchangeError.set(null);

    return this.#http
      .get<
        CoincapResponse<Exchange[]>
      >(`${this.baseUrl}/exchanges?${params.toString()}`, this.headers ? { headers: this.headers } : undefined)
      .pipe(
        map((res) =>
          (res.data ?? []).map((e) => ({
            exchangeId: e.exchangeId,
            name: e.name,
            volumeUsd: toNumber(e.volumeUsd),
            percentTotalVolume: toNumber(e.percentTotalVolume),
            rank: toNumber(e.rank),
          })),
        ),
        map((exchanges) => exchanges[0]),
        catchError((err) => {
          this.topExchangeError.set('Failed to load top exchange. Please try again later.');
          return throwError(() => err);
        }),
        finalize(() => this.#isLoadingTopExchange.set(false)),
      );
  }
}
