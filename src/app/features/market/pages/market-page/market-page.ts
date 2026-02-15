import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'doge-market-page',
  templateUrl: './market-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketPage {}
