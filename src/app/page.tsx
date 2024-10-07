import { FullWidth, Hero, MaxWidthPage } from '@/components';
import FeaturedListings from '@/components/embla/FeaturedListings';

export default function Home() {
  return (
    <FullWidth className="bg-rose-quartz">
      <Hero />
      <MaxWidthPage>
        <FeaturedListings />
      </MaxWidthPage>
    </FullWidth>
  );
}
