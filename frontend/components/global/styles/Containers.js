import styled from "styled-components";
import { motion } from "framer-motion";

export const FullPageContainerStyle = styled(motion.div)`
  display: grid;
  grid-gap: var(--lgSpacing);
`;

export const PageContentContainerStyle = styled(motion.div)`
  position: relative;
  background-color: var(--pageColor);
  border-radius: var(--pageBorderRadius);
  /* min-height: calc(100vh - (130rem)); */
  min-height: calc(100vh - (1.6rem + 1.6rem + 8rem + 2rem + 22.1rem + 2rem));
  /* min-height: calc(100vh - (1.6rem + 1.6rem + 8rem + 2rem)); */
  padding: 0;
  display: flex;
  /* flex: column;
  justify-content: center; */
  display: grid;
  margin-left: auto;
  margin-right: auto;
  min-width: 100%;
`;

export const PageHeaderContainerStyle = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 8rem;
  z-index: 900;
  border-radius: var(--pageBorderRadius);
  background: linear-gradient(
    116.35deg,
    #653cad 16.11%,
    #5cb0ff 99.56%,
    rgba(11, 97, 176, 0.48) 99.57%,
    rgba(101, 60, 173, 0) 99.58%
  );
`;

export const PageHeaderStyle = styled(motion.header)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.2rem 3rem;
  border-radius: var(--pageBorderRadius);
`;

export const PageFooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0;
  ul {
    padding: var(--smSpacing) var(--xxlSpacing);
    margin-bottom: var(--medSpacing);
  }
  li {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    a {
      color: var(--primaryContrast);
    }
  }
  .social {
    background: var(--primary);
    border-radius: var(--pageBorderRadius);
    padding: var(--smSpacing) var(--xxlSpacing);
    a {
      display: flex;
      align-items: center;
      color: black;
      font-size: var(--xs);
      img {
        max-width: 3.2rem;
        min-width: 3.2rem;
        margin-right: 0.8rem;
      }
    }
  }
  .bottom {
    padding: var(--medSpacing) var(--xxlSpacing);
    margin-bottom: var(--medSpacing);
    justify-content: center;
  }
`;

export const NavStyle = styled(motion.nav)`
  padding: var(--xlSpacing) 0;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  li {
    margin-bottom: var(--medSpacing);
    a {
      font-family: "Montserrat", sans-serif;
      font-size: var(--mediumBig);
      color: black;
      :hover {
        font-weight: 700;
      }
    }
  }
`;

export const FlexContainerStyle = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : `row`};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : `left`};
  align-items: ${(props) => (props.alignItems ? props.alignItems : `left`)};
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.padding && `padding: ${props.padding};`}
`;

export const PageTextArea = styled.div`
  position: relative;
  border-radius: var(--pageBorderRadius);
  /* min-height: calc(100vh - (1.6rem + 1.6rem + 8rem + 2rem)); */
  max-width: 1000px;
  padding: 3rem 3rem 3rem 3rem;
  margin-left: auto;
  margin-right: auto;
`;
