import "../styles/_app.css";
import { AppProps } from "next/app";
import { GlobalStyle } from "../components/global/styles/GlobalStyles";
import { FullPageContainerStyle } from "../components/global/styles/Containers";
import { PageHeader } from "../components/global/PageHeader";
import { AnimatePresence } from "framer-motion";
import { PageFooter } from "../components/global/PageFooter";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <FullPageContainerStyle>
        <PageHeader />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <PageFooter />
      </FullPageContainerStyle>
    </>
  );
}

export default MyApp;
