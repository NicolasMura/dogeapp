import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockProvider } from 'ng-mocks';
import { Subject, throwError } from 'rxjs';

import { Asset, CoincapAssetId, CoincapResponse, Exchange } from '@doge/core/models';
import { CoincapService } from './coincap-service';

describe('CoincapService', () => {
  let service: CoincapService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CoincapService, MockProvider(HttpClient)] });
    service = TestBed.inject(CoincapService);
    http = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAssets maps API response and toggles loading while pending', () => {
    const ids: CoincapAssetId[] = ['bitcoin', 'ethereum'];

    const subject = new Subject<CoincapResponse<Asset[]>>();
    vi.spyOn(http, 'get').mockReturnValue(subject.asObservable());

    let result: Asset[] | undefined;
    service.getAssets(ids).subscribe((res) => (result = res));

    // while request is pending the loading signal must be true
    expect(service.isLoadingAssets()).toBeTruthy();

    const expectedUrl = `${service.baseUrl}/assets?${new URLSearchParams({ ids: ids.join(',') }).toString()}`;
    expect(http.get).toHaveBeenCalledWith(expectedUrl);

    subject.next({
      data: [
        {
          id: 'bitcoin',
          symbol: 'BTC',
          name: 'Bitcoin',
          priceUsd: 12345.67,
          changePercent24Hr: 1.23,
        },
        {
          id: 'ethereum',
          symbol: 'ETH',
          name: 'Ethereum',
          priceUsd: 2345.67,
          changePercent24Hr: 2.34,
        },
      ],
      timestamp: 123456789,
    });
    subject.complete();

    expect(result).toEqual([
      {
        id: 'bitcoin',
        symbol: 'BTC',
        name: 'Bitcoin',
        priceUsd: 12345.67,
        changePercent24Hr: 1.23,
      },
      {
        id: 'ethereum',
        symbol: 'ETH',
        name: 'Ethereum',
        priceUsd: 2345.67,
        changePercent24Hr: 2.34,
      },
    ]);

    expect(service.isLoadingAssets()).toBeFalsy();
    expect(service.assetsError()).toBeNull();
  });

  it('getAssets sets assetsError on failure', () => {
    const ids: CoincapAssetId[] = ['bitcoin'];
    vi.spyOn(http, 'get').mockReturnValue(throwError(() => new Error('server error')));

    let errored = false;
    service.getAssets(ids).subscribe({
      next: () => {
        throw new Error('should have errored');
      },
      error: () => (errored = true),
    });

    expect(errored).toBeTruthy();
    expect(service.isLoadingAssets()).toBeFalsy();
    expect(service.assetsError()).toBe('Failed to load assets. Please try again later.');
  });

  it('getTopExchangeBy24hVolume maps API response and toggles loading while pending', () => {
    const subject = new Subject<CoincapResponse<Exchange[]>>();
    vi.spyOn(http, 'get').mockReturnValue(subject.asObservable());

    let result: Exchange | undefined;
    service.getTopExchangeBy24hVolume().subscribe((res) => (result = res));

    // while pending
    expect(service.isLoadingTopExchange()).toBeTruthy();
    expect(http.get).toHaveBeenCalledWith(`${service.baseUrl}/exchanges?limit=1`);

    subject.next({
      data: [
        {
          exchangeId: 'binance',
          name: 'Binance',
          volumeUsd: 1000000,
          percentTotalVolume: 50,
          rank: 1,
        },
      ],
      timestamp: 123456789,
    });
    subject.complete();

    expect(result).toEqual({
      exchangeId: 'binance',
      name: 'Binance',
      volumeUsd: 1000000,
      percentTotalVolume: 50,
      rank: 1,
    });
    expect(service.isLoadingTopExchange()).toBeFalsy();
    expect(service.topExchangeError()).toBeNull();
  });

  it('getTopExchangeBy24hVolume sets topExchangeError on failure', () => {
    vi.spyOn(http, 'get').mockReturnValue(throwError(() => new Error('bad gateway')));

    let errored = false;
    service.getTopExchangeBy24hVolume().subscribe({
      next: () => {
        throw new Error('should have errored');
      },
      error: () => (errored = true),
    });

    expect(errored).toBeTruthy();
    expect(service.isLoadingTopExchange()).toBeFalsy();
    expect(service.topExchangeError()).toBe('Failed to load top exchange. Please try again later.');
  });
});
