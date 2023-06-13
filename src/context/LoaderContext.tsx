import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

export const LoaderContext = createContext<{
  isLoaderActive: boolean;
  handleChangeLoading: (value: boolean) => void;
}>({
  isLoaderActive: false,
  handleChangeLoading: () => {},
});

const LoaderContextProvider = ({ children }: PropsWithChildren) => {
  const [validLoader, setValidLoader] = useState(false);
  const [isLoaderActive, setIsLoaderActive] = useState(false);

  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  useEffect(() => {
    if (!isLoaderActive) {
      return;
    }

    const timer = setTimeout(() => setIsLoaderActive(false), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [validLoader, isLoaderActive]);

  const handleChangeLoading = (value: boolean) => {
    if (value) {
      setIsLoaderActive(value);
    }
    setValidLoader(value);
  };

  useEffect(() => {
    const isLoaderActiveForReactQuery = isFetching || isMutating ? true : false;
    if (isLoaderActiveForReactQuery) {
      handleChangeLoading(isLoaderActiveForReactQuery);
    }
  }, [isFetching, isMutating]);

  const contextValues = {
    isLoaderActive: isLoaderActive || validLoader,
    handleChangeLoading: handleChangeLoading,
  };

  return (
    <LoaderContext.Provider value={contextValues}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContextProvider;
