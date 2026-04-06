import { describe, it, expect } from "vitest";
import { buildWhatsAppUrl, whatsAppContactUrl } from "@/lib/whatsapp";

describe("buildWhatsAppUrl", () => {
  it("uses the correct WhatsApp number", () => {
    const url = buildWhatsAppUrl("Lip Gloss", "₦15,000");
    expect(url).toContain("wa.me/2347017157491");
  });

  it("includes product name in the message", () => {
    const url = buildWhatsAppUrl("Glossy Lip Gloss", "₦15,000");
    expect(url).toContain("Glossy%20Lip%20Gloss");
  });

  it("includes price in the message", () => {
    const url = buildWhatsAppUrl("Bonnet", "₦20,000");
    expect(url).toContain("%E2%82%A620%2C000");
  });

  it("returns a valid HTTPS URL", () => {
    const url = buildWhatsAppUrl("Lip Balm", "₦9,000");
    expect(url).toMatch(/^https:\/\/wa\.me\//);
  });
});

describe("whatsAppContactUrl", () => {
  it("returns a general contact URL with the correct number", () => {
    const url = whatsAppContactUrl();
    expect(url).toContain("wa.me/2347017157491");
    expect(url).toContain("text=");
  });
});
