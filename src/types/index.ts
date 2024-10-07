export interface Testimonial {
  name: string;
  location: string;
  message: string;
  image: string;
}

export interface Slide {
  address: string;
  price: number | string;
  city: string;
  beds: number;
  baths: number;
  sqft: number;
}

export interface NavLink {
  href: string;
  title: string;
  sublinks?: NavLink[];
}
