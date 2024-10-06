import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full relative">
      <video
        src="/videos/hero_video_1920x1080.mp4"
        typeof="video/mp4"
        width={1920}
        height={1080}
        playsInline
        muted
        autoPlay
        loop
        className="object-cover w-full max-h-screen"
      />
      <div className="bg-black opacity-50 absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default Hero;
