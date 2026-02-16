import { MockBuilder, MockRender } from 'ng-mocks';
import { MarketPage } from './market-page';

describe('MarketPage', () => {
  beforeEach(() => MockBuilder(MarketPage));

  it('should create the MarketPage', () => {
    const fixture = MockRender(MarketPage);
    const component = fixture.point.componentInstance;

    expect(component).toBeTruthy();
  });

  it('reload should call refresh', () => {
    const fixture = MockRender(MarketPage);
    const component = fixture.point.componentInstance;

    vi.spyOn(component.refresh$, 'next');

    component.reload();

    expect(component.refresh$.next).toHaveBeenCalled();
  });
});
