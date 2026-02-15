export interface Exchange {
  exchangeId: string;
  name: string;
  rank: number;
  volumeUsd: number | null;
  percentTotalVolume: number | null;
}
