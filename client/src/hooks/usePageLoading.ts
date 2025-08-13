import { useState, useEffect } from 'react';

interface UsePageLoadingOptions {
  duration?: number;
  enableOnAllPages?: boolean;
}

export function usePageLoading(options: UsePageLoadingOptions = {}) {
  const { duration = 1500, enableOnAllPages = true } = options;
  const [isLoading, setIsLoading] = useState(enableOnAllPages);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Reset loading state when component mounts
  useEffect(() => {
    if (enableOnAllPages) {
      setIsLoading(true);
    }
  }, [enableOnAllPages]);

  return {
    isLoading,
    handleLoadingComplete,
    duration
  };
}