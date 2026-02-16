import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { CoincapService } from '@doge/core/services';
import { PriceCard } from '@doge/features/market/components';

@Component({
  selector: 'doge-market-page',
  imports: [AsyncPipe, MatButton, PriceCard],
  templateUrl: './market-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketPage {
  readonly #coincapService = inject(CoincapService);

  readonly assets = this.#coincapService.getAssets(['bitcoin', 'ethereum', 'dogecoin']);

  readonly isLoading = this.#coincapService.isLoadingAssets;
  readonly error = this.#coincapService.assetsError;

  reload() {
    console.error('reload not implemented yet');
  }
}
