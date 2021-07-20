import "../styles/_app.css";
import Head from "next/head";
import { GlobalStyle } from "../components/global/styles/GlobalStyles";
import {
  FullPageContainerStyle,
  PageContentContainerStyle,
} from "../components/global/styles/Containers";
import { PageHeader } from "../components/global/PageHeader";
import { AnimatePresence } from "framer-motion";
import { PageFooter } from "../components/global/PageFooter";

function MyApp({ Component, pageProps, router }) {
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
