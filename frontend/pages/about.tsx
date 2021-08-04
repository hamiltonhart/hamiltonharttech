import Head from "next/head";
import { SectionH2Style } from "../components/about/styles/Typography";
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
        <FlexContainerStyle as="header" flexDirection="column">
          <PageHeadingStyle margin="var(--xxlSpacing) 0 var(--medSpacing) 0">
            About
          </PageHeadingStyle>
          <PStyle as="h2">Hello, there! My name is George Hart.</PStyle>
        </FlexContainerStyle>
        <FlexContainerStyle
          as="section"
          flexDirection="column"
          margin="var(--evenBiggerSpacing) 0 0 0"
        >
          <SectionH2Style>The low down</SectionH2Style>
          <PStyle margin="0 0 var(--xlSpacing) 0">
            I’m a web developer and audio engineer living in Orange County, CA.
            My passion in life is making cool things that, in some way, makes
            people’s lives better.
          </PStyle>
          <PStyle margin="0 0 var(--xlSpacing) 0">
            I love to learn and am always experimenting with new tech.
            Currently, I’m mostly using <span className="bold">React</span>,{" "}
            <span className="bold">NextJS</span>,{" "}
            <span className="bold">Gatsby</span> and{" "}
            <span className="bold">Django</span>.
          </PStyle>
        </FlexContainerStyle>
        <FlexContainerStyle
          as="section"
          flexDirection="column"
          margin="var(--evenBiggerSpacing) 0 0 0"
        >
          <SectionH2Style>Would you like to know more?</SectionH2Style>
          <PStyle margin="0 0 var(--xlSpacing) 0">
            I started my career as a post production audio engineer and have
            helped bring some of your favorite movies and tv shows to life. That
            has allowed me to play with a lot of fun tech and where I found my
            love for web development.
          </PStyle>
          <PStyle margin="0 0 var(--xlSpacing) 0">
            I am always tinkering with things and will generally try to do
            something myself first (hats off to all you plumbers out there).
          </PStyle>
          <PStyle margin="0 0 var(--xlSpacing) 0">
            It’s not all tech though. I love science fiction (though I guess
            that still kind of tech-y), horror movies, Harry Potter
            (Ravenclaw!), Star Wars, comics, hiking and exploring new places.
          </PStyle>
          <PStyle margin="0 0 var(--xlSpacing) 0">
            Give me a shout if you have any questions about a project, myself or
            just to talk about fun stuff.
          </PStyle>
          <PStyle margin="0 0 var(--xlSpacing) 0">Be well everybody.</PStyle>
        </FlexContainerStyle>
      </PageTextArea>
    </>
  );
}
