'use client';

import Link from 'next/link';
import { RefObject, useEffect, useRef } from 'react';

const Header = () => {
  const headerRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (headerRef.current === null) return;

    const handleScroll = (headerRef: RefObject<HTMLDivElement>) => {
      if (headerRef.current === null) return;
      const header = headerRef.current;
      const scrollPosition = window.scrollY;
      if (scrollPosition > header.offsetTop) {
        header.classList.add('bg-white', 'shadow');
        header.classList.remove('text-white', 'bg-transparent');
      } else {
        header.classList.add('text-white', 'bg-transparent');
        header.classList.remove('bg-white', 'shadow');
      }
    };

    window.addEventListener('scroll', () => handleScroll(headerRef));
    return () => window.removeEventListener('scroll', () => handleScroll(headerRef));
  }, [headerRef]);

  return (
    <header
      className="bg-transparent fixed w-full z-50 transition-all ease-in-out duration-300 uppercase"
      ref={headerRef}
    >
      <div className="max-w-[1200px] py-4 mx-auto flex items-center justify-between">
        <Link href="/" className="uppercase text-[3rem]">
          Marissa Varzeas
        </Link>
        <ul className="flex gap-8">
          <li className="hover:">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-gray-800">
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
