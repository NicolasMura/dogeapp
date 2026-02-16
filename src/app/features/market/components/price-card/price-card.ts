import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Asset } from '@doge/core/models';

@Component({
  selector: 'doge-price-card',
  imports: [MatCard, MatCardContent, CurrencyPipe],
  templateUrl: './price-card.html',
  styleUrls: ['./price-card.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceCard {
  asset = input<Asset>();
  highlight = input<boolean>();
  isLoading = input<boolean>();
}
