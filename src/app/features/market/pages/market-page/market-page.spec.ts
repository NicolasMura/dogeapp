import { MarketPage } from '@doge/features/market/pages';
import { MockBuilder, MockRender } from 'ng-mocks';

describe('MarketPage', () => {
  beforeEach(() => MockBuilder(MarketPage));

  it('should create the MarketPage', () => {
    const fixture = MockRender(MarketPage);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
