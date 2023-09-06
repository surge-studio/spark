import { FC } from 'react';
import Link from 'next/link';
import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Showcase } from '@/showcase';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { InstallButton } from './components/InstallButton';
import { SurgeLogomark, SurgeLogotype } from '@/components/SurgeLogo';

const Home: FC = () => {
  return (
    <>
      <div className="text-center py-20 px-4 sm:px-8">
        <SurgeLogomark className="inline-flex mb-6" />
        <Heading as="h1" size="xs" className="mb-1">
          Spark
        </Heading>
        <Text size="sm" className="opacity-80 mb-6">
          Design System
        </Text>
        <InstallButton className="mb-8" />
        <div className="flex justify-center gap-1">
          <Button size="sm" variant="secondary" asChild>
            <Link href="/docs">
              <BookOpen className="w-3 h-3" />
              Documentation
            </Link>
          </Button>
          <Button size="sm" variant="tertiary" asChild>
            <Link
              href="https://github.com/surge-studio/spark"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight className="w-3 h-3" />
            </Link>
          </Button>
          <Button size="sm" variant="tertiary" asChild>
            <Link
              href="https://www.npmjs.com/package/@surge-studio/spark"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </Button>
        </div>
      </div>
      <Divider />
      <div className="dark:bg-gray-950 py-16">
        <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-8">
          <Showcase />
        </div>
      </div>
      <Divider />
      <footer className="flex items-center justify-center py-20">
        <Link
          href="https://surge.studio"
          target="_blank"
          className="outline-none"
        >
          <SurgeLogotype />
        </Link>
      </footer>
    </>
  );
};

export default Home;
