import { InstagramLight, MaxWidth, NavLinks, Phone } from '@/components';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black w-full lg:py-14 py-6 px-4 tracking-wide font-[500]">
      <MaxWidth className="flex flex-col lg:gap-12 lg:flex-row lg:items-start">
        <div className="w-full py-4 lg:py-0 lg:border-none border-b border-gray-200">
          <CompanyInfo />
        </div>
        <div className="w-full py-4 lg:py-0 lg:border-none border-b border-gray-200">
          <SiteLinks />
        </div>
        <div className="w-full py-4 lg:py-0 lg:border-none border-b border-gray-200">
          <SocialLinks />
        </div>
      </MaxWidth>
      <MaxWidth className="text-[0.8em] gap-3 pt-6 lg:pt-14">
        <LegalLinks />
      </MaxWidth>
    </footer>
  );
}

const CompanyInfo = () => {
  return (
    <>
      <p className="uppercase font-bold">Marissa Varzeas</p>
      <p className="text-[sm]">Real Estate Agent in Southern California</p>
      <p className="text-[sm] mb-4 italic">DRE #1234567890</p>
      <div className="flex flex-col gap-[4px]">
        <address>
          25887 Crown Valley Pkwy Unit 2120
          <br />
          Laguna Niguel, CA 92677
        </address>
        <p className="flex gap-2 items-center hover:text-gray-700">
          <Phone size={24} />
          <Link href="tel:+5623654822">(562) 365-4822</Link>
        </p>
      </div>
    </>
  );
};

const SiteLinks = () => {
  return (
    <>
      <p className="mb-4 font-bold text-[1.2rem]">Site Links</p>
      <nav>
        <ul>
          {NavLinks.map((link, i) => (
            <li key={i} className="my-2 w-fit hover:text-gray-700">
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

const SocialLinks = () => {
  return (
    <>
      <p className="mb-4 font-bold text-[1.2rem]">Social Media</p>
      <nav>
        <ul>
          <li>
            <Link
              href="https://www.instagram.com/marissa_varzeas/"
              target="_blank"
              className="flex gap-2 items-center w-fit hover:text-gray-700"
            >
              <InstagramLight size={28} /> marissa_varzeas
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

const LegalLinks = () => {
  return (
    <ul className="flex justify-center lg:justify-start flex-wrap mb-2">
      <li className="footer-legal-link">
        <Link href="/">Home Page |</Link>
      </li>
      <li className="footer-legal-link">
        <Link href="/privacy-policy">Privacy Policy</Link>
      </li>
      <li className="footer-legal-link">
        <Link href="/terms-conditions">Terms and Conditions</Link>
      </li>
      <li className="footer-legal-link">
        <Link href="/disclaimer">Disclaimer</Link>
      </li>
      <li className="footer-legal-link">
        <Link href="/cookie-policy">Cookie Policy</Link>
      </li>
      <li className="footer-legal-link">
        <Link href="/refund-cancellation">Refund and Cancellation Policy</Link>
      </li>
    </ul>
  );
};
