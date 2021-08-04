import Head from "next/head";
import { PageTextArea } from "../components/global/PageTextArea";
import {
  PageHeadingStyle,
  PStyle,
} from "../components/global/styles/Typography";

interface Props {}

export default function Custom404({}: Props) {
  return (
    <>
      <Head>
        <title>Hamilton Hart Tech | 404</title>
      </Head>
      <PageTextArea>
        <PageHeadingStyle>Dang!</PageHeadingStyle>
        <PStyle>404 | There's nothing here...</PStyle>
        <PStyle>Think this is an error? Let me know!</PStyle>
      </PageTextArea>
    </>
  );
}
