import QueryWrapper from "@lib/queryClientWrapper";
import StyledThemeWrapper from "@lib/styledThemeWrapper";
import { Hydrate } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { initializeTranslations } from "next-translations/hooks";

import Layout from "@/components/Layout";
import Alerts from "@/lib/alertsWrapper";
import ContextWrapper from "@/lib/contextWrapper";

const App = ({ Component, pageProps }: AppProps) => {
  initializeTranslations(pageProps?.translations);

  return (
    <QueryWrapper>
      <Hydrate state={pageProps.dehydratedState}>
        <ContextWrapper>
          <StyledThemeWrapper>
            <Layout>
              <Alerts>
                <Component {...pageProps} />
              </Alerts>
            </Layout>
          </StyledThemeWrapper>
        </ContextWrapper>
      </Hydrate>
    </QueryWrapper>
  );
};

export default App;
