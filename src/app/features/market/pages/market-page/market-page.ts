import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { CoincapService } from '@doge/core/services';
import { PriceCard } from '@doge/features/market/components';
import { startWith, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'doge-market-page',
  imports: [AsyncPipe, MatButton, PriceCard, MatProgressSpinner],
  templateUrl: './market-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketPage {
  readonly #coincapService = inject(CoincapService);

  readonly refresh$ = new Subject<void>();
  readonly assets$ = this.refresh$.pipe(
    startWith(null),
    switchMap(() => this.#coincapService.getAssets(['bitcoin', 'ethereum', 'dogecoin'])),
  );

  readonly isLoading = this.#coincapService.isLoadingAssets;
  readonly error = this.#coincapService.assetsError;

  reload() {
    this.refresh$.next();
  }
}
