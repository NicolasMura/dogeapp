import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatHint, MatInput, MatLabel } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { CoincapService } from '@doge/core/services';
import { Error, OrderConfirmationToast, OrderSummary, PageTitle } from '@doge/ui';
import { tap } from 'rxjs';

@Component({
  selector: 'doge-tickets-page',
  imports: [
    RouterLink,
    CurrencyPipe,
    MatButton,
    MatProgressSpinner,
    PageTitle,
    OrderSummary,
    Error,
    MatFormField,
    MatLabel,
    MatInput,
    MatHint,
    MatDivider,
  ],
  templateUrl: './tickets-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketsPage implements OnInit {
  readonly #coincapService = inject(CoincapService);
  readonly #snackBar = inject(MatSnackBar);

  private destroyRef = inject(DestroyRef);

  readonly quantity = signal(1);
  readonly dogePriceEur = signal<number | null>(null);

  // Loading & error states
  readonly isLoadingDogePrice = this.#coincapService.isLoadingAssets;
  readonly dogePriceError = this.#coincapService.assetsError;

  ngOnInit(): void {
    this.loadDoge();
  }

  setQuantity(event: Event) {
    const input = event.target as HTMLInputElement;
    this.quantity.set(Number(input.value));
  }

  confirmPurchase() {
    this.#snackBar.openFromComponent(OrderConfirmationToast, {
      duration: 5000,
    });
    this.quantity.set(1);
  }

  private loadDoge() {
    this.#coincapService
      .getAssets(['dogecoin'])
      .pipe(
        tap((assets) => this.dogePriceEur.set(assets[0]?.priceUsd ?? null)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
