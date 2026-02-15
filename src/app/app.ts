import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@doge/ui';

@Component({
  selector: 'doge-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('dogeapp');
}
