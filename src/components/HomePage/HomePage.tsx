import { usePageColorMode } from "@hooks/usePageColorMode";
import { useTranslation } from "@hooks/useTranslations";

const HomePage = () => {
  const { handleChangePageColorMode, darkMode } = usePageColorMode();

  const { tString } = useTranslation("common");

  return (
    <section>
      <div>{tString("example")}</div>
      <button onClick={handleChangePageColorMode}>
        is dark mode: {darkMode.toString()}
      </button>
    </section>
  );
};

export default HomePage;
