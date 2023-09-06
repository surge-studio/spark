import { Button } from '@/components/Button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import { Text } from '@/components/Text';
import type { FC } from 'react';

export const PopoverDemo: FC = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="secondary" size="sm">
        Popover
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="space-y-1">
          <Text className="font-medium">Dimensions</Text>
          <Text size="sm">Set the dimensions for the layer.</Text>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" className="col-span-2" />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
);
