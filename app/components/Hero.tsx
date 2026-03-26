import { ZapIcon } from 'lucide-react';
import { FC } from 'react';

export const Hero: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-24 text-center sm:px-8">
      <div className="flex max-w-2xl items-center justify-center gap-4">
        <ZapIcon className="w-8 text-foreground" />
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Spark
        </h1>
      </div>
    </section>
  );
};
