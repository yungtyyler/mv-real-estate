'use client';

import Link from 'next/link';
import { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';
import { HamburgerX, NavLinks } from '@/components';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuref = useRef() as MutableRefObject<HTMLDivElement>;

  const handleClick = () => {
    if (open) {
      setOpen(false);
      document.body.style.overflow = 'auto';
    } else {
      setOpen(true);
      document.body.style.overflow = 'hidden';
    }
  };

  useEffect(() => {
    setOpen(false);

    document.body.style.overflow = 'auto';
  }, [pathname]);

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuref.current.contains(e.target)) {
        setOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  useEffect(() => {
    if (menuref.current === null) return;

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

    window.addEventListener('scroll', () => handleScroll(menuref));
    return () => window.removeEventListener('scroll', () => handleScroll(menuref));
  }, [menuref]);

  return (
    <header
      className="bg-transparent fixed w-full z-50 transition-all ease-in-out duration-200 uppercase px-4 text-white"
      ref={menuref}
    >
      <div
        className={`absolute top-0 left-0 bg-black ${
          open ? 'opacity-70 min-h-screen w-full' : 'opacity-0 -z-50 h-0 w-0'
        } transition-opacity ease-in-out duration-300`}
      />
      <Sidebar handleClick={handleClick} menuref={menuref} navLinks={NavLinks} open={open} />
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
        <div className={`lg:hidden cursor-pointer ${open ? 'hidden' : 'block'}`} onClick={() => handleClick()}>
          <HamburgerX open={open} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
