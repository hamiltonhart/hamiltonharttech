import Head from "next/head";
import { Page } from "../components/global/Page";
import {
  FlexContainerStyle,
  PageTextArea,
} from "../components/global/styles/Containers";
import {
  PageHeadingStyle,
  PStyle,
} from "../components/global/styles/Typography";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Hamilton Hart Tech | Contact</title>
      </Head>
      <Page>
        <PageTextArea>
          <FlexContainerStyle as="section" flexDirection="column">
            <PageHeadingStyle
              margin="var(--xxlSpacing) 0 var(--xxlSpacing) 0"
              center
            >
              Contact
            </PageHeadingStyle>
          </FlexContainerStyle>
          <FlexContainerStyle>
            <PStyle>Coming soon!</PStyle>
          </FlexContainerStyle>
        </PageTextArea>
      </Page>
    </>
  );
}
