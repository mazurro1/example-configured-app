import { LoaderContext } from "@context/LoaderContext";
import { useContext } from "react";

export const useLoader = () => {
  const { isLoaderActive, handleChangeLoading } = useContext(LoaderContext);

  return { isLoaderActive, handleChangeLoading };
};
