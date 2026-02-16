import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Exchange } from '@doge/core/models';

@Component({
  selector: 'doge-exchange-highlight',
  imports: [CurrencyPipe],
  templateUrl: './exchange-highlight.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExchangeHighlight {
  readonly exchange = input<Exchange>();
  readonly isLoading = input<boolean>();
}
