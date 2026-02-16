import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'doge-error',
  templateUrl: './error.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Error {
  readonly errorMessage = input<string>('An unexpected error occurred. Please try again later.');
}
