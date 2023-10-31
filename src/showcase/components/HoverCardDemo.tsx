import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/Button';
import { Avatar } from '@/components/Avatar';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/HoverCard';
import type { FC } from 'react';
import { Text } from '@/components/Text';

export const HoverCardDemo: FC = () => (
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="secondary" size="sm">
        Hover Card
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <Avatar src="https://github.com/vercel.png" label="VC" />
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <Text size="sm">
            The React Framework - created and maintained by @vercel.
          </Text>
          <div className="flex gap-2 items-center pt-2">
            <CalendarDays className="h-4 w-4 opacity-70" />{' '}
            <span className="text-xs text-gray-500">Joined December 2021</span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);
