import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'doge-order-summary',
  imports: [CurrencyPipe],
  templateUrl: './order-summary.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderSummary {
  readonly quantity = input(1);
  readonly unitPriceEur = input(4);
  readonly dogePriceEur = input<number | null>(null);

  subtotalEur = computed(() => this.quantity() * this.unitPriceEur());

  discountEur = computed(() => (this.quantity() >= 2 ? this.subtotalEur() * 0.05 : 0));

  totalEur = computed(() => this.subtotalEur() - this.discountEur());

  totalDoge = computed(() => {
    const price = this.dogePriceEur();
    if (!price || !Number.isFinite(price)) return NaN;
    return this.totalEur() / price;
  });
}
