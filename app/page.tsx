import { Text } from '@/components/Text';
import { Heading } from '@/components/Heading';
import { Button } from '@/components/Button';
import { FC } from 'react';
import Link from 'next/link';

const Home: FC = () => {
  return (
    <main>
      <div className="w-full py-8 text-center flex flex-col gap-2">
        <Heading>Spark</Heading>
        <Text className="text-gray-600">Surge Studio Design System</Text>
        <div className="mt-4">
          <Button variant="secondary" asChild>
            <Link href="/docs">View the documentation</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
