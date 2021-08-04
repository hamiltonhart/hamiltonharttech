import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { PageTextArea } from "../components/global/PageTextArea";
import { SlideIn } from "../components/global/SlideIn";
import { FlexContainerStyle } from "../components/global/styles/Containers";
import {
  PageHeadingStyle,
  PageH2Style,
} from "../components/global/styles/Typography";

export default function Home() {
  const h2Variants = {
    hover: {
      scale: 2,
    },
  };

  return (
    <>
      <Head>
        <title>Hamilton Hart Tech | Home</title>
        <meta name="description" content="" />
      </Head>
      <PageTextArea>
        <FlexContainerStyle as="section" flexDirection="column">
          <PageHeadingStyle margin="var(--xxlSpacing) 0 var(--xxlSpacing) 0">
            Hi, I'm George.
          </PageHeadingStyle>
          <div>
            {/* <SlideIn> */}
            <Link href="/contact">
              <a>
                <PageH2Style
                  className="highlight lift"
                  margin="var(--lgSpacing) 0"
                  position="relative"
                >
                  Let's build a website!
                </PageH2Style>
              </a>
            </Link>
            {/* </SlideIn> */}
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
            <Link href="/projects">here!</Link>
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
      </PageTextArea>
    </>
  );
}
