import QueryWrapper from "@lib/queryClientWrapper";
import StyledThemeWrapper from "@lib/styledThemeWrapper";
import { AppProps } from "next/app";
import { initializeTranslations } from "next-translations/hooks";

import Layout from "@/components/Layout";
import ContextWrapper from "@/lib/contextWrapper";

const App = ({ Component, pageProps }: AppProps) => {
  initializeTranslations(pageProps?.translations);

  return (
    <ContextWrapper>
      <QueryWrapper>
        <StyledThemeWrapper>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </StyledThemeWrapper>
      </QueryWrapper>
    </ContextWrapper>
  );
};

export default App;
