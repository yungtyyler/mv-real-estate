import Link from 'next/link';
import React from 'react';
import { FullWidth, MaxWidth } from '..';

const DATE_STAMP = new Date().getFullYear();

const FooterBanner = () => {
  return (
    <FullWidth className="py-2 bg-black text-white">
      <MaxWidth className="text-center">
        <p>
          Website crafted and powered by{' '}
          <Link href="https://primewebsolutions.org" target="_blank" className="shimmer font-bold">
            Prime Web Solutions
          </Link>
          . Copyright © {DATE_STAMP} All Rights Reserved
        </p>
      </MaxWidth>
    </FullWidth>
  );
};

export default FooterBanner;
