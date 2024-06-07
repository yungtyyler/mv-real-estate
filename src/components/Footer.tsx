import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4 tracking-wide backdrop-blur-xl border border-t-gray-200">
      <div className="flex flex-col lg:gap-12 lg:flex-row lg:items-start lg:justify-between md:max-w-[1200px] mx-auto">
        <div className="w-full py-4 lg:py-0 lg:border-none border-b border-gray-200 flex flex-col gap-4">
          <Image src="/logos/mv_logo_transparent.png" alt="Logo" width={200} height={200} />
          <div className="px-4 flex flex-col gap-2 text-gray-600">
            <p>
              Cell:{' '}
              <a href="tel:+15623654822" className="font-bold">
                (562) 365-4822
              </a>
            </p>
            <p>
              Email:{' '}
              <a href="mailto:+15623654822" className="font-bold">
                marissathegoat19@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 flex flex-col gap-4 w-full py-4 md:py-0">
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/about" className="text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/about" className="text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="/about" className="text-gray-600">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-600">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
