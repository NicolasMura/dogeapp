export const toNumber = (value: unknown): number => {
  const n = typeof value === 'string' ? Number(value) : (value as number);
  return Number.isFinite(n) ? n : NaN;
};
