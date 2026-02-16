import { MockBuilder, MockedComponentFixture, MockRender } from 'ng-mocks';
import { PriceCard } from './price-card';

describe('PriceCard', () => {
  let fixture: MockedComponentFixture<PriceCard, object>;
  let component: PriceCard;

  beforeEach(() => MockBuilder(PriceCard));

  beforeEach(() => {
    fixture = MockRender(PriceCard, { asset: { name: 'Bitcoin', priceUsd: 12345.67 } });
    component = fixture.point.componentInstance;
  });

  it('should create the PriceCard', () => {
    expect(component).toBeTruthy();
  });
});
