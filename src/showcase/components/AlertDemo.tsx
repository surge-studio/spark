import { AlertCircle, CheckCircle, Terminal } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/Alert';
import type { FC } from 'react';

export const AlertDemo: FC = () => (
  <div className="flex flex-col gap-2">
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Alert</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    <Alert variant="error">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
    <Alert variant="success">
      <CheckCircle className="h-4 w-4" />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>Mission complete.</AlertDescription>
    </Alert>
  </div>
);
