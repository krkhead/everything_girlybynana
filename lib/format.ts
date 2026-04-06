/** Convert kobo integer to formatted Naira string: 1_500_000 → "₦15,000" */
export function formatNaira(kobo: number): string {
  const naira = kobo / 100;
  return `\u20A6${naira.toLocaleString("en-NG", { maximumFractionDigits: 0 })}`;
}

/** Convert Naira string input (e.g. "15000") to kobo integer */
export function nairaToKobo(nairaStr: string): number {
  return Math.round(parseFloat(nairaStr) * 100);
}

/** Convert kobo integer to plain Naira number string for form inputs */
export function koboToNaira(kobo: number): string {
  return String(kobo / 100);
}
