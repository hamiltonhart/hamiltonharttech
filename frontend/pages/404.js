import Head from "next/head";
import { Page } from "../components/global/Page";
import {
  PageHeadingStyle,
  PStyle,
} from "../components/global/styles/Typography";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Hamilton Hart Tech | 404</title>
      </Head>
      <Page>
        <PageHeadingStyle>Dang!</PageHeadingStyle>
        <PStyle>404 | There's nothing here...</PStyle>
        <PStyle>Think this is an error? Let me know!</PStyle>
      </Page>
    </>
  );
}
