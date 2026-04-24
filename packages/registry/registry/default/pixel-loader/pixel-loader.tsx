import type { CSSProperties, FC, ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PixelLoaderVariant = 'wave' | 'pulse' | 'wipe' | 'orbit';
type PixelLoaderSize = 'sm' | 'md' | 'lg' | number;

interface PixelLoaderProps {
  readonly variant?: PixelLoaderVariant;
  readonly size?: PixelLoaderSize;
  readonly gridSize?: number;
  readonly bloom?: boolean;
  readonly className?: string;
}

type PixelLoaderStyle = CSSProperties & {
  readonly '--pixel-loader-bloom': string;
  readonly '--pixel-loader-bloom-soft': string;
  readonly '--pixel-loader-duration': string;
  readonly '--pixel-loader-frame': string;
  readonly '--pixel-loader-gap': string;
  readonly '--pixel-loader-lift': string;
  readonly '--pixel-loader-drop': string;
  readonly '--pixel-loader-pixel': string;
  readonly '--pixel-loader-grid': number;
};

const animationDurationMs = 940;

const namedSizes: Record<Exclude<PixelLoaderSize, number>, number> = {
  sm: 12,
  md: 16,
  lg: 24,
};

const pixelLoaderStyles = `
@keyframes spark-pixel-loader-wipe {
  0%, 100% {
    opacity: 0.18;
    transform: scale(0.42);
  }
  42% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes spark-pixel-loader-orbit {
  0%, 100% {
    opacity: 0.12;
    transform: scale(0.36);
  }
  1%, 11% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes spark-pixel-loader-wave {
  0%, 100% {
    opacity: 0.14;
    transform: translateY(0) scale(0.48);
  }
  30% {
    opacity: 1;
    transform: translateY(var(--pixel-loader-lift)) scale(1);
  }
  58% {
    opacity: 0.34;
    transform: translateY(var(--pixel-loader-drop)) scale(0.68);
  }
}

@keyframes spark-pixel-loader-pulse {
  0%, 100% {
    opacity: 0.16;
    transform: translateY(var(--pixel-loader-drop)) scale(0.48);
  }
  45% {
    opacity: 1;
    transform: translateY(var(--pixel-loader-lift)) scale(1);
  }
}

.spark-pixel-loader[data-bloom='true'] [data-pixel-loader-part] {
  box-shadow:
    0 0 var(--pixel-loader-bloom-soft) currentColor,
    0 0 var(--pixel-loader-bloom) currentColor;
}

@media (prefers-reduced-motion: reduce) {
  .spark-pixel-loader [data-pixel-loader-part] {
    animation-duration: 1ms;
    animation-iteration-count: 1;
  }
}
`;

const getNumericSize = (size: PixelLoaderSize) => {
  if (typeof size === 'number' && Number.isFinite(size)) {
    return Math.min(96, Math.max(8, size));
  }

  if (typeof size === 'string') {
    return namedSizes[size];
  }

  return namedSizes.md;
};

const getNumericGridSize = (gridSize: number) => {
  if (!Number.isFinite(gridSize)) {
    return 6;
  }

  return Math.min(9, Math.max(3, Math.round(gridSize)));
};

const getPixelLoaderStyle = (
  size: PixelLoaderSize,
  gridSize: number
): PixelLoaderStyle => {
  const frameSize = getNumericSize(size);
  const pixelSize = Math.max(
    1,
    Number(((frameSize / gridSize) * 0.42).toFixed(2))
  );
  const gapSize = Number(
    ((frameSize - pixelSize * gridSize) / (gridSize - 1)).toFixed(2)
  );
  const scanOffset = Number((pixelSize * 0.36).toFixed(2));
  const bloomSize = Math.max(4, Number((frameSize * 0.24).toFixed(2)));
  const bloomSoftSize = Math.max(2, Number((frameSize * 0.12).toFixed(2)));

  return {
    '--pixel-loader-bloom': `${bloomSize}px`,
    '--pixel-loader-bloom-soft': `${bloomSoftSize}px`,
    '--pixel-loader-duration': `${animationDurationMs}ms`,
    '--pixel-loader-frame': `${frameSize}px`,
    '--pixel-loader-gap': `${gapSize}px`,
    '--pixel-loader-lift': `-${scanOffset}px`,
    '--pixel-loader-drop': `${scanOffset}px`,
    '--pixel-loader-pixel': `${pixelSize}px`,
    '--pixel-loader-grid': gridSize,
  };
};

const getCells = (gridSize: number) => Array.from({ length: gridSize ** 2 });

const getRow = (index: number, gridSize: number) =>
  Math.floor(index / gridSize);

const getColumn = (index: number, gridSize: number) => index % gridSize;

const getGridDelayIndex = (index: number, gridSize: number) =>
  getColumn(index, gridSize) + getRow(index, gridSize);

const getWaveDelayIndex = (index: number, gridSize: number) => {
  const center = (gridSize - 1) / 2;
  const columnDistance = Math.abs(getColumn(index, gridSize) - center);
  const rowDistance = Math.abs(getRow(index, gridSize) - center);

  return Number((columnDistance + rowDistance).toFixed(2));
};

const getOrbitPath = (gridSize: number) => {
  const path: number[] = [];
  const last = gridSize - 1;

  for (let column = 0; column < gridSize; column += 1) {
    path.push(column);
  }

  for (let row = 1; row < gridSize; row += 1) {
    path.push(row * gridSize + last);
  }

  for (let column = last - 1; column >= 0; column -= 1) {
    path.push(last * gridSize + column);
  }

  for (let row = last - 1; row > 0; row -= 1) {
    path.push(row * gridSize);
  }

  return path;
};

const getDelayStyle = (
  index: number,
  step = 48,
  direction: 'negative' | 'positive' = 'positive'
): CSSProperties => {
  let delay = index * step;

  if (direction === 'negative') {
    delay *= -1;
  }

  return {
    animationDelay: `${Number(delay.toFixed(2))}ms`,
  };
};

const Pixel = ({
  className,
  index,
  step,
  delayDirection,
}: {
  readonly className?: string;
  readonly delayDirection?: 'negative' | 'positive';
  readonly index: number;
  readonly step?: number;
}) => (
  <span
    data-pixel-loader-part=""
    style={getDelayStyle(index, step, delayDirection)}
    className={cn('size-[var(--pixel-loader-pixel)] bg-current', className)}
  />
);

const LoaderFrame: FC<{
  readonly children: ReactNode;
}> = ({ children }) => (
  <span className="grid size-[var(--pixel-loader-frame)] grid-cols-[repeat(var(--pixel-loader-grid),minmax(0,1fr))] gap-[var(--pixel-loader-gap)]">
    {children}
  </span>
);

const Wipe = ({ gridSize }: { readonly gridSize: number }) => (
  <LoaderFrame>
    {getCells(gridSize).map((_, index) => (
      <Pixel
        key={index}
        index={getGridDelayIndex(index, gridSize)}
        className="[animation:spark-pixel-loader-wipe_var(--pixel-loader-duration)_ease-in-out_infinite]"
      />
    ))}
  </LoaderFrame>
);

const Orbit = ({ gridSize }: { readonly gridSize: number }) => {
  const orbitPath = getOrbitPath(gridSize);
  const orbitStep = animationDurationMs / orbitPath.length;
  const orbitPathMap = new Map(
    orbitPath.map((cellIndex, pathIndex) => [cellIndex, pathIndex])
  );

  return (
    <LoaderFrame>
      {getCells(gridSize).map((_, cellIndex) => {
        const pathIndex = orbitPathMap.get(cellIndex);

        if (pathIndex === undefined) {
          return (
            <span
              key={cellIndex}
              aria-hidden="true"
              className="size-[var(--pixel-loader-pixel)]"
            />
          );
        }

        return (
          <Pixel
            key={cellIndex}
            index={pathIndex}
            step={orbitStep}
            delayDirection="negative"
            className="[animation:spark-pixel-loader-orbit_var(--pixel-loader-duration)_linear_infinite]"
          />
        );
      })}
    </LoaderFrame>
  );
};

const Wave = ({ gridSize }: { readonly gridSize: number }) => (
  <LoaderFrame>
    {getCells(gridSize).map((_, index) => (
      <Pixel
        key={index}
        index={getGridDelayIndex(index, gridSize)}
        step={66}
        className="[animation:spark-pixel-loader-wave_var(--pixel-loader-duration)_ease-in-out_infinite]"
      />
    ))}
  </LoaderFrame>
);

const Pulse = ({ gridSize }: { readonly gridSize: number }) => (
  <LoaderFrame>
    {getCells(gridSize).map((_, index) => (
      <Pixel
        key={index}
        index={getWaveDelayIndex(index, gridSize)}
        step={82}
        className="[animation:spark-pixel-loader-pulse_var(--pixel-loader-duration)_ease-in-out_infinite]"
      />
    ))}
  </LoaderFrame>
);

const renderLoader = (variant: PixelLoaderVariant, gridSize: number) => {
  if (variant === 'pulse') {
    return <Pulse gridSize={gridSize} />;
  }

  if (variant === 'orbit') {
    return <Orbit gridSize={gridSize} />;
  }

  if (variant === 'wipe') {
    return <Wipe gridSize={gridSize} />;
  }

  return <Wave gridSize={gridSize} />;
};

const PixelLoader: FC<PixelLoaderProps> = ({
  variant = 'pulse',
  size = 'md',
  gridSize = 6,
  bloom = false,
  className,
}) => {
  const numericGridSize = getNumericGridSize(gridSize);
  const loaderStyle = getPixelLoaderStyle(size, numericGridSize);
  let bloomAttribute: string | undefined = undefined;

  if (bloom) {
    bloomAttribute = 'true';
  }

  return (
    <span
      aria-hidden="true"
      data-bloom={bloomAttribute}
      data-variant={variant}
      style={loaderStyle}
      className={cn(
        'spark-pixel-loader inline-grid size-[var(--pixel-loader-frame)] place-items-center text-current',
        className
      )}
    >
      <style>{pixelLoaderStyles}</style>
      {renderLoader(variant, numericGridSize)}
    </span>
  );
};

export { PixelLoader };
export type { PixelLoaderProps, PixelLoaderSize, PixelLoaderVariant };
