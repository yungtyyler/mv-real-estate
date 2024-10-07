'use client';

import { FullWidth } from '@/components';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';
import { NextButton, PrevButton, usePrevNextButtons } from './ArrowButtons';
import { DotButton, useDotButton } from './DotButtons';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import { Slide } from '@/types';
import Image from 'next/image';

const TWEEN_FACTOR_BASE = 0.84;
const numberWithinRange = (number: number, min: number, max: number): number => Math.min(Math.max(number, min), max);
const SLIDES: Slide[] = [
  {
    address: '25887 Crown Valley Pkwy Unit 2120',
    baths: 1,
    beds: 1,
    city: 'Laguna Niguel',
    price: 3240,
    sqft: 778,
  },
  {
    address: '25887 Crown Valley Pkwy Unit 2120',
    baths: 1,
    beds: 1,
    city: 'Laguna Niguel',
    price: 3240,
    sqft: 778,
  },
  {
    address: '25887 Crown Valley Pkwy Unit 2120',
    baths: 1,
    beds: 1,
    city: 'Laguna Niguel',
    price: 3240,
    sqft: 778,
  },
];

const FeaturedListings = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = eventName === 'scroll';

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity);
  }, [emblaApi, tweenOpacity, setTweenFactor]);

  return (
    <FullWidth className="md:my-16 my-8">
      {SLIDES.length > 0 ? (
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {SLIDES.map((index) => (
                <div className="embla__slide" key={index.address}>
                  <Image
                    className="embla__slide__img"
                    src="/images/placeholder.png"
                    alt="Your alt text"
                    width={532}
                    height={304}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="embla__controls">
            <div className="embla__buttons">
              <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
              <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>

            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p className="font-bold text-[1.8em] text-white text-center py-4 border-b border-white">
          New listings coming soon!
        </p>
      )}
    </FullWidth>
  );
};

export default FeaturedListings;
