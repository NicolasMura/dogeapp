import { Routes } from '@angular/router';
import { MarketPage } from '@doge/features/market/pages';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'market' },
  { path: 'market', component: MarketPage },
  { path: '**', redirectTo: 'market' },
];
