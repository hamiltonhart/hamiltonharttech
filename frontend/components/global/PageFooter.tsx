import Link from "next/link";
import { PageFooterStyle, FlexContainerStyle } from "./styles/Containers";
import IG_Logo from "../../public/images/glyph-logo_May2016.png";
import GitHub_Logo from "../../public/images/GitHub-Mark-64px.png";
import { PStyle } from "./styles/Typography";

interface Props {

}

export const PageFooter = ({}:Props) => {
  return (
    <PageFooterStyle>
      <FlexContainerStyle as="ul" justifyContent="space-between">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </FlexContainerStyle>
      <FlexContainerStyle className="social" justifyContent="space-around">
        <Link href="http://www.github.com/hamiltonhart">
          <a target="_blank" rel="noreferrer noopener">
            <img src={GitHub_Logo.src} alt="GitHub Logo" />
            {`/hamiltonhart`}
          </a>
        </Link>
        <Link href="http://www.instagram.com/jimmyscrote">
          <a target="_blank" rel="noreferrer noopener">
            <img src={IG_Logo.src} alt="Instagram Logo" />
            @jimmyscrote
          </a>
        </Link>
      </FlexContainerStyle>
      <FlexContainerStyle className="bottom">
        <PStyle color="var(--primaryContrast)" textAlign="center">
          HamiltonHartTech &copy;2021
        </PStyle>
      </FlexContainerStyle>
    </PageFooterStyle>
  );
};
