'use client';

import {
  PixelLoader,
  type PixelLoaderVariant,
} from '@spark/registry/pixel-loader';
import { useState } from 'react';

import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const variants: readonly PixelLoaderVariant[] = [
  'wave',
  'pulse',
  'wipe',
  'orbit',
];

export function PixelLoaderPreview() {
  const [variant, setVariant] = useState<PixelLoaderVariant>('wave');
  const [size, setSize] = useState(16);
  const [gridSize, setGridSize] = useState(6);
  const [bloom, setBloom] = useState(false);

  const updateVariant = (nextVariant: string) => {
    if (!nextVariant) {
      return;
    }

    setVariant(nextVariant as PixelLoaderVariant);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="border-border flex min-h-64 items-center justify-center rounded-[10px] border p-8">
        <PixelLoader
          variant={variant}
          size={size}
          gridSize={gridSize}
          bloom={bloom}
          className="text-foreground"
        />
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_12rem_12rem_auto]">
        <div className="flex min-w-0 flex-col gap-2">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Variant
          </span>
          <ToggleGroup
            type="single"
            value={variant}
            onValueChange={updateVariant}
            variant="outline"
            size="sm"
            className="flex-wrap justify-start"
          >
            {variants.map((item) => (
              <ToggleGroupItem
                key={item}
                value={item}
                aria-label={item}
                className="capitalize"
              >
                {item}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        <SliderControl
          label="Size"
          value={size}
          min={8}
          max={64}
          onValueChange={setSize}
        />

        <SliderControl
          label="Grid"
          value={gridSize}
          min={3}
          max={9}
          onValueChange={setGridSize}
        />

        <div className="flex flex-col gap-2">
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            Bloom
          </span>
          <div className="flex h-9 items-center">
            <Switch checked={bloom} onCheckedChange={setBloom} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderControl({
  label,
  max,
  min,
  onValueChange,
  value,
}: {
  readonly label: string;
  readonly max: number;
  readonly min: number;
  readonly onValueChange: (value: number) => void;
  readonly value: number;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
        {label}
      </span>
      <div className="flex h-9 items-center gap-3">
        <Slider
          aria-label={label}
          min={min}
          max={max}
          step={1}
          value={[value]}
          onValueChange={([nextValue]) => {
            if (nextValue === undefined) {
              return;
            }

            onValueChange(nextValue);
          }}
          className="min-w-24 flex-1"
        />
        <span className="text-muted-foreground w-6 text-right font-mono text-sm">
          {value}
        </span>
      </div>
    </div>
  );
}
