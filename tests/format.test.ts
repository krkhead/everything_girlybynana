import { describe, it, expect } from "vitest";
import { formatNaira, nairaToKobo, koboToNaira } from "@/lib/format";

describe("formatNaira", () => {
  it("converts kobo to ₦ display string", () => {
    expect(formatNaira(1_500_000)).toBe("₦15,000");
  });

  it("formats lip balm price correctly", () => {
    expect(formatNaira(900_000)).toBe("₦9,000");
  });

  it("formats bonnet price correctly", () => {
    expect(formatNaira(2_000_000)).toBe("₦20,000");
  });

  it("uses the Naira unicode character", () => {
    expect(formatNaira(100_000)).toMatch(/^\u20A6/);
  });
});

describe("nairaToKobo", () => {
  it("converts 15000 Naira to kobo", () => {
    expect(nairaToKobo("15000")).toBe(1_500_000);
  });

  it("converts 9000 Naira to kobo", () => {
    expect(nairaToKobo("9000")).toBe(900_000);
  });

  it("handles decimal input", () => {
    expect(nairaToKobo("100.50")).toBe(10_050);
  });
});

describe("koboToNaira", () => {
  it("converts kobo back to plain Naira string", () => {
    expect(koboToNaira(1_500_000)).toBe("15000");
  });

  it("converts bonnet price", () => {
    expect(koboToNaira(2_000_000)).toBe("20000");
  });
});
