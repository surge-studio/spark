import { cn } from '@/lib/utils';
import { Slider } from '@/components/Slider';
import type { ComponentProps, FC } from 'react';

type SliderProps = ComponentProps<typeof Slider>;

export const SliderDemo: FC<SliderProps> = ({ className, ...props }) => (
  <Slider
    defaultValue={[50]}
    max={100}
    step={1}
    className={cn('w-[60%]', className)}
    {...props}
  />
);
