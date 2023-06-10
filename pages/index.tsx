import { GetStaticProps } from "next";
import { getTranslationsProps } from "next-translations";

import HomePage from "@/components/HomePage";

export default function Home() {
  return <HomePage />;
}

export const getStaticProps: GetStaticProps = async ctx => {
  const translatesProps = await getTranslationsProps(ctx, [""]);

  return {
    props: {
      ...translatesProps,
    },
  };
};
