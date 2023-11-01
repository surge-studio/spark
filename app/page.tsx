import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Showcase } from '@/showcase';
import { SurgeLogomark, SurgeLogotype } from '@/components/SurgeLogo';
import { InstallButton } from './components/InstallButton';
import { ThemeSelection } from './components/ThemeSelection';
import type { FC } from 'react';

const Home: FC = () => (
  <>
    <div className="absolute right-2 top-2">
      <ThemeSelection />
    </div>
    <div className="px-4 py-20 text-center sm:px-8">
      <SurgeLogomark className="inline-flex mb-6" />
      <Heading as="h1" size="xs" className="mb-1">
        Spark
      </Heading>
      <Text size="sm" className="mb-6 opacity-80">
        Design System
      </Text>
      <InstallButton className="mb-8" />
      <div className="flex justify-center gap-0.5">
        <Button size="sm" variant="tertiary" asChild>
          <Link href="/docs">
            <BookOpen className="w-3 h-3 opacity-50" />
            Documentation
          </Link>
        </Button>
        <Button size="sm" variant="tertiary" asChild>
          <Link
            href="https://github.com/surge-studio/spark"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ArrowUpRight className="w-3 h-3 opacity-50" />
          </Link>
        </Button>
        <Button size="sm" variant="tertiary" asChild>
          <Link
            href="https://www.npmjs.com/package/@surge-studio/spark"
            target="_blank"
            rel="noopener noreferrer"
          >
            npm
            <ArrowUpRight className="w-3 h-3 opacity-50" />
          </Link>
        </Button>
      </div>
    </div>
    <Divider />
    <div className="py-16 dark:bg-gray-950">
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

export default Home;
