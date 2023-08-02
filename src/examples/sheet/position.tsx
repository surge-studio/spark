'use client';

import { useState } from 'react';
import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import type { FC } from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/Sheet';
import { RadioGroup, RadioGroupItem } from '@/components/RadioGroup';

const sheetPositions = ['top', 'right', 'bottom', 'left'] as const;

type SheetPositionProps = (typeof sheetPositions)[number];

export const SheetPosition: FC = () => {
  const [position, setPosition] = useState<SheetPositionProps>('right');
  return (
    <div className="flex flex-col space-y-8">
      <RadioGroup
        defaultValue={position}
        onValueChange={(value) => setPosition(value as SheetPositionProps)}
      >
        <div className="grid grid-cols-2 gap-2">
          {sheetPositions.map((value, index) => (
            <div
              key={`${value}-${index}`}
              className="flex items-center space-x-2"
            >
              <RadioGroupItem value={value} id={value} />
              <Label htmlFor={value}>{value}</Label>
            </div>
          ))}
        </div>
      </RadioGroup>
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open {position} sheet</Button>
        </SheetTrigger>
        <SheetContent position={position} size="content">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Hayden Barnett" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                value="@haydenbarnett"
                className="col-span-3"
              />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
