import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'doge-page-title',
  imports: [],
  templateUrl: './page-title.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageTitle {
  h1 = input.required<string>();
  p = input.required<string>();
}
