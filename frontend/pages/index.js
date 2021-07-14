import Head from "next/head";
import Link from "next/link";
import { Page } from "../components/global/Page";
import {
  FlexContainerStyle,
  PageTextArea,
} from "../components/global/styles/Containers";
import {
  PageHeadingStyle,
  PageH2Style,
} from "../components/global/styles/Typography";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hamilton Hart Tech | Home</title>
      </Head>
      <Page>
        <FlexContainerStyle as="section" flexDirection="column">
          <PageHeadingStyle margin="var(--xxlSpacing) 0 var(--xxlSpacing) 0">
            Hi, I'm George.
          </PageHeadingStyle>
          <div>
            <PageH2Style
              className="highlight"
              margin="var(--lgSpacing) 0"
              position="relative"
            >
              Let's build a website!
            </PageH2Style>
          </div>
        </FlexContainerStyle>

        <FlexContainerStyle
          as="section"
          flexDirection="column"
          margin="var(--xxlSpacing) 0"
        >
          <p>I’m a full stack developer out of California.</p>
          <p>
            You can see some of the projects I've worked on{" "}
            <Link href="/">here!</Link>
          </p>
          <p>
            Give me a shout if you'd like to discuss scheduling some work or if
            you just want to talk tech, Star Wars...
            <span className="getting-smaller">
              {" "}
              horror movies...
              <span className="getting-smaller"> Harry Potter...</span>
            </span>
          </p>
        </FlexContainerStyle>
      </Page>
    </>
  );
}
