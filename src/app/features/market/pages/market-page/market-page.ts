import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CoincapService } from '@doge/core/services';
import { ExchangeHighlight, PriceCard } from '@doge/features/market/components';
import { startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'doge-market-page',
  imports: [AsyncPipe, MatButton, MatProgressSpinner, PriceCard, ExchangeHighlight],
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
  );
  readonly topExchange$ = this.refresh$.pipe(
    startWith(null),
    switchMap(() => this.#coincapService.getTopExchangeBy24hVolume()),
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
