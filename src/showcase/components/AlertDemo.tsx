import { Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/Alert';
import type { FC } from 'react';

export const AlertDemo: FC = () => (
  <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Alert</AlertTitle>
    <AlertDescription>
      You can add components to your app using the cli.
    </AlertDescription>
  </Alert>
);
