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
  xxl: 'text-2xl',
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-base',
  sm: 'text-sm',
  xs: 'text-xs',
};

const textWeightClassName: Record<TextWeights, string> = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Text = forwardRef<RefType, TextProps>(
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
