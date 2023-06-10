import { usePageColorMode } from "@hooks/usePageColorMode";
import { useTranslation } from "@hooks/useTranslations";
import { GetStaticProps } from "next";
import { getTranslationsProps } from "next-translations";

export default function Home() {
  const { handleChangePageColorMode, darkMode } = usePageColorMode();

  const { tString } = useTranslation("common");

  return (
    <main>
      <div>{tString("example")}</div>
      <button onClick={handleChangePageColorMode}>
        is dark mode: {darkMode.toString()}
      </button>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async ctx => {
  const translatesProps = await getTranslationsProps(ctx, [""]);

  return {
    props: {
      ...translatesProps,
    },
  };
};
