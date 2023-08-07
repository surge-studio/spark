import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ContextMenu';
import type { FC } from 'react';

export const ContextMenuDemo: FC = () => (
  <ContextMenu>
    <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-64">
      <ContextMenuItem inset>
        Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem inset disabled>
        Forward
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem inset>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSub>
        <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
        <ContextMenuSubContent className="w-48">
          <ContextMenuItem>
            Save Page As...
            <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>Create Shortcut...</ContextMenuItem>
          <ContextMenuItem>Name Window...</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Developer Tools</ContextMenuItem>
        </ContextMenuSubContent>
      </ContextMenuSub>
      <ContextMenuSeparator />
      <ContextMenuCheckboxItem checked>
        Show Bookmarks Bar
        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
      </ContextMenuCheckboxItem>
      <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
      <ContextMenuSeparator />
      <ContextMenuRadioGroup value="hayden">
        <ContextMenuLabel inset>People</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioItem value="hayden">
          Hayden Barnett
        </ContextMenuRadioItem>
        <ContextMenuRadioItem value="anna">Anna Ji</ContextMenuRadioItem>
      </ContextMenuRadioGroup>
    </ContextMenuContent>
  </ContextMenu>
);
