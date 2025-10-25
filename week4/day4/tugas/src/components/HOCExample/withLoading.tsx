import React from 'react';

export interface WithLoadingProps {
  isLoading: boolean;
}

const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  
  const WithLoadingComponent: React.FC<P & WithLoadingProps> = ({ 
    isLoading, 
    ...props 
  }) => {
    
    if (isLoading) {
      return (
        <div className="font-semibold text-blue-600 p-5 text-center text-lg animate-pulse">
          Memuat data...
        </div>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };
  
  return WithLoadingComponent;
};

export default withLoading;