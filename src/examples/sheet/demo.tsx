import { Button } from '@/components/Button';
import { Label } from '@/components/Label';
import { Input } from '@/components/Input';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/Sheet';
import type { FC } from 'react';

export const SheetDemo: FC = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="tertiary">Open</Button>
    </SheetTrigger>
    <SheetContent position="right" size="sm">
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you&apos;re done.
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
          <Input id="username" value="@haydenbarnett" className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <Button type="submit">Save changes</Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);
