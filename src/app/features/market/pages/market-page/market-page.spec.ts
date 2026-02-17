import { signal } from '@angular/core';
import { CoincapService } from '@doge/core/services';
import { MockBuilder, MockedComponentFixture, MockInstance, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { MarketPage } from './market-page';

describe('MarketPage', () => {
  let component: MarketPage;
  let fixture: MockedComponentFixture<MarketPage>;

  beforeEach(() => MockBuilder(MarketPage).mock(CoincapService));

  beforeEach(() => {
    MockInstance(CoincapService, () => ({
      getAssets: vi.fn().mockReturnValue(of([])),
      getTopExchangeBy24hVolume: vi.fn().mockReturnValue(of(null)),
      isLoadingAssets: signal(false),
      isLoadingTopExchange: signal(false),
      assetsError: signal(null),
      topExchangeError: signal(null),
    }));

    fixture = MockRender(MarketPage);
    component = fixture.point.componentInstance;
  });

  it('should create the MarketPage', () => {
    expect(component).toBeTruthy();
  });

  it('reload should call refresh', () => {
    vi.spyOn(component.refresh$, 'next');

    component.reload();

    expect(component.refresh$.next).toHaveBeenCalled();
  });
});
