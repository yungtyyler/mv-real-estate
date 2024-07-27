import { Luxurious_Roman, Cardo, Cormorant } from 'next/font/google';

export const luxurious_roman = Luxurious_Roman({
  subsets: ['latin'],
  weight: ['400'],
});

export const cardo = Cardo({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
