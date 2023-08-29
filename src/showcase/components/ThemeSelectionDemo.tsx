import { Sun, Moon, Monitor } from 'lucide-react';
import { Button } from '@/components/Button';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/DropdownMenu';
import { useState, type FC, useEffect } from 'react';
import { Skeleton } from '@/components/Skeleton';

export const ThemeSelectionDemo: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const light = (
    <>
      <Sun className="h-4 w-4" />
      <span>Light theme</span>
    </>
  );

  const dark = (
    <>
      <Moon className="h-4 w-4" />
      <span>Dark theme</span>
    </>
  );

  const system = (
    <>
      <Monitor className="h-4 w-4" />
      <span>System theme</span>
    </>
  );

  if (!mounted) {
    return <Skeleton className="w-[40px] h-[40px]" />;
  }

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
