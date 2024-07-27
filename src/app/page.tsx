import { Hero, SlideShow } from '@/components';
import { Testimonial } from '@/types';
import Image from 'next/image';

const testimonials: Testimonial[] = [
  { name: 'John Doe', location: 'Laguna Beach', image: '/logos/mv_logo.png', message: 'I love my 3 bed 2 bath home!' },
  { name: 'Jane Doe', location: 'Irvine', image: '/logos/mv_logo.png', message: 'Close enough to school to walk!' },
  {
    name: 'John Doe',
    location: 'Dana Point',
    image: '/logos/mv_logo.png',
    message: 'I can smell the beach from here!',
  },
];

export default function Home() {
  return (
    <section className="w-full">
      <Hero />

      {/* Testimonials */}
      <div className="page__container bg-coral">
        <h2 className="text-[2em] font-semibold self-start">Testimonials</h2>
        <p className="text-gray-500 self-start">Hear from previous clients who found their perfect homes</p>
        <div className="py-4 grid lg:grid-cols-3 md:grid-cols-2 gap-4 items-center md:justify-between w-full">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-lg shadow-xl p-6 flex flex-col gap-8 justify-between bg-white w-full h-full"
            >
              <p className="font-semibold text-[1.1em]">&quot;{testimonial.message}&quot;</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Listings */}
      <div className="section__container">
        <SlideShow />
      </div>
    </section>
  );
}
