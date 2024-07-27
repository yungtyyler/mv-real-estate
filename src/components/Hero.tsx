import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src="/house-hero.webp"
        alt="House background"
        priority
        width={2560}
        height={1707}
        className="object-cover w-full max-h-screen"
      />
    </div>
  );
};

export default Hero;
