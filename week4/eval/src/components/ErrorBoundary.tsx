import { Component} from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import type { ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Alert variant="destructive" className="my-8">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Oops! Something went wrong.</AlertTitle>
          <AlertDescription>
            Terjadi kesalahan pada bagian ini. Silakan coba muat ulang halaman.
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}