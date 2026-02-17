import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { CoincapService } from '@doge/core/services';
import { ExchangeHighlight, PriceCard } from '@doge/features/market/components';
import { Error, PageTitle } from '@doge/ui';
import { catchError, of, startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'doge-market-page',
  imports: [
    AsyncPipe,
    MatButton,
    MatProgressSpinner,
    PriceCard,
    ExchangeHighlight,
    PageTitle,
    Error,
    RouterLink,
  ],
  templateUrl: './market-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketPage {
  readonly #coincapService = inject(CoincapService);

  // Prices & exchanges data
  readonly refresh$ = new Subject<void>();
  readonly assets$ = this.refresh$.pipe(
    startWith(null),
    switchMap(() => this.#coincapService.getAssets(['bitcoin', 'ethereum', 'dogecoin'])),
    catchError(() => of([])),
  );
  readonly topExchange$ = this.refresh$.pipe(
    startWith(null),
    switchMap(() => this.#coincapService.getTopExchangeBy24hVolume()),
    catchError(() => of(null)),
  );

  // Loading & error states
  readonly isLoadingAssets = this.#coincapService.isLoadingAssets;
  readonly isLoadingTopExchange = this.#coincapService.isLoadingTopExchange;
  readonly assetsError = this.#coincapService.assetsError;
  readonly topExchangeError = this.#coincapService.topExchangeError;

  reload() {
    this.refresh$.next();
  }
}
