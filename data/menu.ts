export type Product = {
  name: string;
  description: string;
  price: string;
  bestFor: string;
  category: "nastar" | "cookies" | "tong" | "misu" | "gift";
  isSignature?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    name: "Nastar Coco Classic",
    description: "Nastar buttery klasik dengan isian nanas premium, lembut di setiap gigitan.",
    price: "Rp ___",
    bestFor: "Hadiah & keluarga",
    category: "nastar",
    isSignature: true,
  },
  {
    name: "Nastar Coco Original",
    description: "Nastar original dengan tekstur renyah luar, lembut dalam — resep andalan Nastar Coco.",
    price: "Rp ___",
    bestFor: "Momen spesial",
    category: "nastar",
    isSignature: true,
  },
  {
    name: "Coco Cookies",
    description: "Cookies premium dengan cita rasa hangat dan tekstur yang pas untuk dinikmati kapan saja.",
    price: "Rp ___",
    bestFor: "Snacking & gift",
    category: "cookies",
    isSignature: true,
  },
  {
    name: "Nastar Gift Box",
    description: "Paket nastar premium dalam box cantik — gift-worthy, siap hadir di setiap momen spesial.",
    price: "Rp ___",
    bestFor: "Hampers & hadiah",
    category: "gift",
    isSignature: true,
  },
];
