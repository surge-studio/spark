import { FC } from 'react';
import Link from 'next/link';

import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Showcase } from '@/showcase';
import clsx from 'clsx';
import { ArrowUpRight, BookOpen } from 'lucide-react';

const Logo: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 93.2 116.6"
      className={clsx('w-10', className)}
    >
      <g>
        <g>
          <path
            fill="currentColor"
            d="M7.9,96.6c-0.3,0-0.7-0.1-0.9-0.3c-0.5-0.5-0.5-1.3,0-1.8l34.9-34.9H21.3c-0.5,0-1-0.3-1.2-0.8 c-0.2-0.5-0.1-1,0.3-1.3l40.2-40.2c0.5-0.5,1.3-0.5,1.8,0s0.5,1.3,0,1.8l-37.9,38h20.5c0.5,0,1,0.3,1.2,0.8c0.2,0.5,0.1,1-0.3,1.3 l-37,37C8.5,96.5,8.2,96.6,7.9,96.6z"
          ></path>
        </g>
        <path
          fill="currentColor"
          d="M92.8,2.1c0.5-0.5,0.5-1.3,0-1.8s-1.3-0.5-1.8,0L40.6,50.8c-0.3,0.3-0.5,0.9-0.3,1.3c0.2,0.5,0.7,0.8,1.2,0.8 H62L0.4,114.5c-0.5,0.5-0.5,1.3,0,1.8c0.3,0.3,0.6,0.3,0.9,0.3s0.7-0.1,0.9-0.3l63.8-63.8c0.3-0.3,0.5-0.9,0.3-1.3 c-0.2-0.5-0.7-0.8-1.2-0.8h-7.1l31.2-31.2c0.5-0.5,0.5-1.3,0-1.8s-1.3-0.5-1.8,0l-33.2,33h-9.8L92.8,2.1z"
        ></path>
        <g>
          <path
            fill="currentColor"
            d="M34.7,96.6c-0.3,0-0.7-0.1-0.9-0.3c-0.5-0.5-0.5-1.3,0-1.8l30.2-30.2c0.5-0.5,1.3-0.5,1.8,0 c0.5,0.5,0.5,1.3,0,1.8L35.6,96.2C35.4,96.5,35.1,96.6,34.7,96.6z"
          ></path>
        </g>
      </g>
    </svg>
  );
};

const Home: FC = () => {
  return (
    <main>
      <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-8">
        <div className="text-center py-24">
          <Logo className="inline-flex mb-6" />
          <Heading as="h1" size="sm" className="mb-2">
            Spark
          </Heading>
          <Text className="text-gray-600 dark:text-gray-400 mb-6">
            Design System
          </Text>
          <div className="mb-8">
            <code className="text-sm">pnpm add @surge-studio/spark</code>
          </div>
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
        <Divider className="mb-16" />
        <Showcase />
      </div>
    </main>
  );
};

export default Home;
