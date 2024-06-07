import { CustomButton, SlideShow } from '@/components';
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
    <section className="page__container relative">
      {/* Background circles */}
      <div className="w-[800px] h-[800px] rounded-full bg-pink-gradient fixed top-[-100px] left-[-300px] -z-10" />
      <div className="w-[800px] h-[800px] rounded-full bg-pink-gradient fixed bottom-[-500px] right-[-300px] -z-10" />

      {/* Hero */}
      <div className="py-8 flex flex-col gap-4 items-center justify-center text-center">
        <h1 className="text-[3em] font-bold">Your Need. My Mission.</h1>
        <p className="text-gray-500">Your dream home, only one call away</p>
        <CustomButton href="/about" title="Learn More" color="bg-black" />
        <Image
          src="https://picsum.photos/1280/640"
          alt="Home Image"
          width={1280}
          height={640}
          priority
          className="object-cover rounded-lg mt-8"
        />
      </div>

      {/* Testimonials */}
      <div className="section__container">
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
