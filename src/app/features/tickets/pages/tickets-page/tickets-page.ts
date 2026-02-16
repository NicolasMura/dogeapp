import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'doge-tickets-page',
  imports: [RouterLink, MatButton],
  templateUrl: './tickets-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsPage {}
