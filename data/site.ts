export const SITE = {
  name: "Nastar Coco",
  tagline: "The nastar that feels like home.",
  whatsapp: "628XXXXXXXXXX",
  whatsappMessage: "Hi Nastar Coco! I'd like to place an order 🍍",
  instagram: "https://instagram.com/nastarcoco",
  instagramHandle: "@nastarcoco",
  email: "hello@nastarcoco.id",
  website: "https://nastarcoco.id",
  address: "[Alamat Nastar Coco — akan diupdate]",
  googleMapsUrl: "#",
  cocoffeeWhatsapp: "628XXXXXXXXXX",
  cocoffeeHours: "Mon – Sun: 08.00 – 20.00",
};

export const WHATSAPP_URL = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
