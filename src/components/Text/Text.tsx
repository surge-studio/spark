import { forwardRef } from 'react';
import clsx from 'clsx';
import type { HTMLProps } from 'react';

type TextSizes = 'lg' | 'md' | 'sm' | 'xl' | 'xs' | 'xxl';
type TextTags = 'div' | 'label' | 'p' | 'span';
type TextWeights = 'bold' | 'medium' | 'normal' | 'semibold';
type RefType =
  | HTMLDivElement
  | HTMLLabelElement
  | HTMLParagraphElement
  | HTMLSpanElement;

type TextProps = Omit<HTMLProps<HTMLElement>, 'size'> & {
  size?: TextSizes;
  as?: TextTags;
  weight?: TextWeights;
};

const textSizeClassName: Record<TextSizes, string> = {
  xxl: 'text-2xl tracking-[-0.022em]',
  xl: 'text-xl tracking-[-0.021em]',
  lg: 'text-lg tracking-[-0.019em]',
  md: 'text-base tracking-[-0.011em]',
  sm: 'text-sm tracking-[-0.006em]',
  xs: 'text-xs',
};

const textWeightClassName: Record<TextWeights, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const Text = forwardRef<RefType, TextProps>(
  ({ as, size = 'md', weight = 'normal', className, ...props }, ref) => {
    const Element = as ?? 'p';

    return (
      <Element
        className={clsx(
          textSizeClassName[size],
          textWeightClassName[weight],
          className
        )}
        // @ts-expect-error TODO: fix this
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
