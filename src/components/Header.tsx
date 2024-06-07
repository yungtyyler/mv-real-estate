import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomButton from './CustomButton';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between p-4 max-w-[1200px] mx-auto bg-transparent">
      <Link href="/">
        <Image
          src="/logos/initial_logo.png"
          alt="Marissa Varzeas - Real Estate Agent"
          width={100}
          height={100}
          className="rounded-full object-contain border border-black shadow-lg hover:shadow-xl transition-all duration-150 ease-in-out"
        />
      </Link>
      <ul className="flex gap-8">
        <li className="hover:text-gray-800">
          <Link href="/about">About</Link>
        </li>
        <li className="hover:text-gray-800">
          <Link href="/services">Services</Link>
        </li>
        <li>
          <CustomButton color="bg-black" title="Contact" href="/contact" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
