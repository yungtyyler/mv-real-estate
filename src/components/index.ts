import { NavLink } from '@/types';

export { default as Header } from './layouts/Header';
export { default as Footer } from './layouts/Footer';
export { default as CustomButton } from './CustomButton';
export { default as SlideShow } from './SlideShow';
export { default as Hero } from './Hero';
export {
  Hamburger,
  DownChevron,
  InstagramDark,
  InstagramLight,
  LinkedInDark,
  LinkedInLight,
  NextArrow,
  Phone,
  PrevArrow,
} from './Icons';
export { ContentWidth, FullWidth, MaxWidth, MaxWidthPage } from './layouts/Containers';

export const META_TITLE = 'Marissa Varzeas - Real Estate Agent';
export const META_DESCRIPTION =
  'Marissa Varzeas is a real estate agent in the Orange County, California. She is a young, motivated, and dedicated agent who is ready to help you find your dream home.';

export const NavLinks: NavLink[] = [
  { href: '/about', title: 'About' },
  { href: '/services', title: 'Services' },
  { href: '/contact', title: 'Contact' },
];
