export const SITE = {
  name: "Nastar Coco",
  tagline: "Golden nastar yang terasa seperti rumah.",
  whatsapp: "628XXXXXXXXXX",
  whatsappMessage: "Halo Nastar Coco! Saya ingin order nastar 🍍",
  instagram: "https://instagram.com/nastarcoco",
  instagramHandle: "@nastarcoco",
  email: "hello@nastarcoco.id",
  website: "https://nastarcoco.id",
  address: "[Alamat Nastar Coco — akan diupdate]",
  googleMapsUrl: "#",
  cocoffeeWhatsapp: "628XXXXXXXXXX",
  cocoffeeHours: "Senin – Minggu: 08.00 – 20.00",
};

export const WHATSAPP_URL = (msg?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg ?? SITE.whatsappMessage)}`;
