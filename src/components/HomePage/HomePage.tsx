import { usePageColorMode } from "@hooks/usePageColorMode";
import { useTranslation } from "@hooks/useTranslations";
import svgImage from "@images/next.svg";

import Image from "@/ui/Image";

const HomePage = () => {
  const { handleChangePageColorMode, darkMode } = usePageColorMode();

  const { tString } = useTranslation("common");

  return (
    <section>
      <div>{tString("example")}</div>
      <button onClick={handleChangePageColorMode}>
        is dark mode: {darkMode.toString()}
      </button>
      <Image src={svgImage} alt="xxx" />
    </section>
  );
};

export default HomePage;
