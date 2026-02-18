import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MatSnackBarAction,
  MatSnackBarActions,
  MatSnackBarLabel,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'doge-order-confirmation-toast',
  imports: [MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel],
  templateUrl: './order-confirmation-toast.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: flex;
    }
  `,
})
export class OrderConfirmationToast {
  snackBarRef = inject(MatSnackBarRef);
}
