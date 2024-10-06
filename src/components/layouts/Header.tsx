'use client';

import Link from 'next/link';
import { RefObject, useEffect, useRef } from 'react';
import { Hamburger } from '@/components';
import Image from 'next/image';

const Header = () => {
  const headerRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (headerRef.current === null) return;

    const handleScroll = (headerRef: RefObject<HTMLDivElement>) => {
      if (headerRef.current === null) return;
      const header = headerRef.current;
      const scrollPosition = window.scrollY;
      if (scrollPosition > header.offsetTop) {
        header.classList.add('text-black', 'bg-white', 'shadow');
        header.classList.remove('text-white', 'bg-transparent');
      } else {
        header.classList.add('text-white', 'bg-transparent');
        header.classList.remove('bg-white', 'shadow', 'text-black');
      }
    };

    window.addEventListener('scroll', () => handleScroll(headerRef));
    return () => window.removeEventListener('scroll', () => handleScroll(headerRef));
  }, [headerRef]);

  return (
    <header
      className="bg-transparent fixed w-full z-50 transition-all ease-in-out duration-200 uppercase px-4 text-white"
      ref={headerRef}
    >
      <nav className="max-w-[1200px] py-4 mx-auto flex items-center justify-between">
        <Link href="/" className="uppercase lg:text-[3rem] md:text-[2.2rem] text-[2rem] md:block hidden">
          Marissa Varzeas
        </Link>
        <Image
          alt="Logo"
          src="/images/logos/initial_logo.png"
          width={100}
          height={100}
          className="object-contain w-[100px] aspect-square md:hidden block"
        />
        <ul className="lg:flex gap-8 hidden">
          <li className="hover:text-dark-sage transition-colors group">
            <Link href="/about">
              About
              <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-dark-sage" />
            </Link>
          </li>
          <li className="hover:text-dark-sage transition-colors group">
            <Link href="/services">
              Services
              <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-dark-sage" />
            </Link>
          </li>
          <li className="hover:text-dark-sage transition-colors group">
            <Link href="/contact">
              Contact
              <span className="block max-w-0 group-hover:max-w-full transition-all h-0.5 bg-dark-sage" />
            </Link>
          </li>
        </ul>
        <Hamburger className="lg:hidden block" color="white" />
      </nav>
    </header>
  );
};

export default Header;
