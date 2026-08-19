import type { Metadata } from 'next';
import type { FC } from 'react';

import { Hero } from '@/components/marketing/hero';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const Home: FC = () => (
  <div>
    <Hero />
  </div>
);

export default Home;
