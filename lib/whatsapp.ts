const WHATSAPP_NUMBER = "2347017157491";

/**
 * Build a WhatsApp click-to-chat URL with a pre-filled order message.
 * Opens wa.me which works on both mobile (native app) and desktop (WhatsApp Web).
 */
export function buildWhatsAppUrl(productName: string, price: string): string {
  const message = encodeURIComponent(
    `Hi Nana! 💕 I'd like to order:\n\n• ${productName} (${price})\n\nPlease let me know availability and delivery details. Thank you!`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

/** General contact link (no product pre-fill) */
export function whatsAppContactUrl(): string {
  const message = encodeURIComponent(
    "Hi Nana! 💕 I'd like to learn more about Everything Girly by Nana."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}
