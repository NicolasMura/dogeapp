import { Routes } from '@angular/router';
import { MarketPage } from '@doge/features/market/pages';
import { TicketsPage } from '@doge/features/tickets/pages';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'market' },
  { path: 'market', component: MarketPage },
  { path: 'tickets', component: TicketsPage },
  { path: '**', redirectTo: 'market' },
];
