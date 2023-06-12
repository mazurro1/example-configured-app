import { usePageColorMode } from "@hooks/usePageColorMode";
import { useTranslation } from "@hooks/useTranslations";
import svgImage from "@images/next.svg";

import { useAlerts } from "@/hooks/useAlerts";
import Image from "@/ui/Image";

const HomePage = () => {
  const { handleChangePageColorMode, darkMode } = usePageColorMode();
  const { handleAddAlert } = useAlerts();

  const { tString } = useTranslation("common");

  return (
    <section>
      <div>{tString("example")}</div>
      <button onClick={handleChangePageColorMode}>
        is dark mode: {darkMode.toString()}
      </button>
      <button
        onClick={() => {
          handleAddAlert({
            variant: "info",
            message: "xxxxxxxxx",
          });
        }}
      >
        add alert
      </button>
      <Image
        onAll={{
          src: svgImage,
        }}
        alt="xxx"
      />
    </section>
  );
};

export default HomePage;
