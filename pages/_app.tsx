import QueryWrapper from "@lib/queryClientWrapper";
import StyledThemeWrapper from "@lib/styledThemeWrapper";
import { AppProps } from "next/app";
import { initializeTranslations } from "next-translations/hooks";

import Layout from "@/components/Layout";
import Alerts from "@/lib/alertsWrapper";
import ContextWrapper from "@/lib/contextWrapper";

const App = ({ Component, pageProps }: AppProps) => {
  initializeTranslations(pageProps?.translations);

  return (
    <QueryWrapper>
      <ContextWrapper>
        <StyledThemeWrapper>
          <Layout>
            <Alerts>
              <Component {...pageProps} />
            </Alerts>
          </Layout>
        </StyledThemeWrapper>
      </ContextWrapper>
    </QueryWrapper>
  );
};

export default App;
