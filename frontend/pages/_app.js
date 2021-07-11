import "../styles/_app.css";
import Head from "next/head";
import { GlobalStyle } from "../components/global/styles/GlobalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
