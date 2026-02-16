import { MockBuilder, MockRender } from 'ng-mocks';
import { MarketPage } from './market-page';

describe('MarketPage', () => {
  beforeEach(() => MockBuilder(MarketPage));

  it('should create the MarketPage', () => {
    const fixture = MockRender(MarketPage);
    const component = fixture.point.componentInstance;
    expect(component).toBeTruthy();
  });
});
