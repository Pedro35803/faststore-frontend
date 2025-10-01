type ConfigProps = { format: string; currency: string };

export const coinFormat = (
  value: number,
  { format, currency }: ConfigProps
) => {
  if (Number.isNaN(value)) return "";
  const formatted = new Intl.NumberFormat(format, {
    style: "currency",
    currency,
  }).format(Math.abs(value / 100));
  return value < 0 ? formatted.replace(/^(\D+\s)/, "$1-") : formatted;
};

export const coinPtBr = (value: number): string =>
  coinFormat(value, { format: "pt-br", currency: "BRL" });
