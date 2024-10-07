'use client';

import Link from 'next/link';
import { MutableRefObject } from 'react';
import { HamburgerX, InstagramLight } from '@/components';
import { NavLink } from '@/types';

type Props = {
  menuref: MutableRefObject<HTMLDivElement>;
  open: boolean;
  handleClick: () => void;
  navLinks: NavLink[];
};

const Sidebar = ({ menuref, open, handleClick, navLinks }: Props) => {
  return (
    <div ref={menuref} className={`sidebar ${open ? 'lg:hidden flex translate-x-0' : '-translate-x-[100%]'}`}>
      <div
        className={`flex justify-between items-center py-4 ${
          open ? 'opacity-100 delay-150' : 'opacity-0'
        } transition-opacity ease-in-out duration-150`}
      >
        <Link href="/" className="text-white text-3xl uppercase font-bold text-start">
          Marissa Varzeas
        </Link>
        <button className="text-white cursor-pointer flex flex-col items-center gap-4" onClick={() => handleClick()}>
          <HamburgerX open={open} />
        </button>
      </div>

      {/* Nav Links */}
      <div className="flex flex-col items-start gap-8 py-14 border-b border-gray-300">
        {navLinks.map((link, i) => (
          <div key={i} className="w-full text-start">
            <Link
              href={link.href}
              onClick={() => handleClick()}
              className="hover:text-gray-300 text-xl px-2 transition-colors ease-in-out duration-200"
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>

      {/* Socials */}
      <div className="flex flex-col gap-4">
        <Link
          href="https://instagram.com/marissa_varzeas"
          className="font-bold uppercase flex items-center gap-4 hover:text-gray-300 transition-colors ease-in-out duration-150"
        >
          <InstagramLight color="white" size={32} />
          Instagram
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
