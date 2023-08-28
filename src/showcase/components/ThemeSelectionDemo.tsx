import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/Button';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu';
import type { FC } from 'react';

export const ThemeSelectionDemo: FC = () => {
  const { theme, setTheme } = useTheme();

  const light = (
    <>
      <Sun className="mr-2 h-4 w-4" />
      <span>Light theme</span>
    </>
  );

  const dark = (
    <>
      <Moon className="mr-2 h-4 w-4" />
      <span>Dark theme</span>
    </>
  );

  const system = (
    <>
      <Monitor className="mr-2 h-4 w-4" />
      <span>System theme</span>
    </>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          {theme === 'system' ? system : theme === 'light' ? light : dark}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          {light}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          {dark}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          {system}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
