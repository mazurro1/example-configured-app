import { useLoader } from "@hooks/useLoader";
import Popup from "@ui/Popup";

import { LoaderStyled } from "./Loader.style";

const Loader = () => {
  const { isLoaderActive } = useLoader();
  return (
    <Popup isOpen={isLoaderActive} inWindow={false} isLoader>
      <LoaderStyled>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoaderStyled>
    </Popup>
  );
};
export default Loader;
