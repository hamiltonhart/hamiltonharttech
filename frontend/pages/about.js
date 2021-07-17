import Head from "next/head";
import { PageTextArea } from "../components/global/PageTextArea";
import { FlexContainerStyle } from "../components/global/styles/Containers";
import {
  PageHeadingStyle,
  PStyle,
} from "../components/global/styles/Typography";

export default function About() {
  return (
    <>
      <Head>
        <title>Hamilton Hart Tech | About</title>
      </Head>
      <PageTextArea>
        <FlexContainerStyle as="section" flexDirection="column">
          <PageHeadingStyle
            margin="var(--xxlSpacing) 0 var(--xxlSpacing) 0"
            center
          >
            About
          </PageHeadingStyle>
        </FlexContainerStyle>
        <FlexContainerStyle>
          <PStyle>Coming soon!</PStyle>
        </FlexContainerStyle>
      </PageTextArea>
    </>
  );
}
