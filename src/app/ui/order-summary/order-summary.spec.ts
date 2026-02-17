import { MockBuilder, MockRender } from 'ng-mocks';
import { OrderSummary } from './order-summary';

describe('OrderSummary', () => {
  beforeEach(() => MockBuilder(OrderSummary));

  it('should create the OrderSummary', () => {
    const fixture = MockRender(OrderSummary);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
