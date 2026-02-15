export type CoincapAssetId = 'bitcoin' | 'ethereum' | 'dogecoin';

export interface Asset {
  id: CoincapAssetId;
  symbol: string;
  name: string;
  priceUsd: number;
  changePercent24Hr: number | null;
}
