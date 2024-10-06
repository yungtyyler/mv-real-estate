'use client';

import { FullWidth } from '@/components';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const FeaturedListings = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 8000 })]);

  return (
    <FullWidth>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
    </FullWidth>
  );
};

export default FeaturedListings;
