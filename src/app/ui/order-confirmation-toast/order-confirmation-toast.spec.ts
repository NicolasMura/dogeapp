import { MatSnackBarRef } from '@angular/material/snack-bar';
import { MockBuilder, MockRender } from 'ng-mocks';
import { OrderConfirmationToast } from './order-confirmation-toast';

describe('OrderConfirmationToast', () => {
  beforeEach(() => MockBuilder(OrderConfirmationToast).mock(MatSnackBarRef));

  it('should create the OrderConfirmationToast', () => {
    const fixture = MockRender(OrderConfirmationToast);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
