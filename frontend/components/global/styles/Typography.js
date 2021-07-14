import styled from "styled-components";

export const PageHeadingStyle = styled.h1`
  font-family: "Montserrat", sans-serif;
  font-size: var(--large);
  font-weight: 700;
  margin: ${(props) => (props.margin ? props.margin : `var(--xxlSpacing) 0`)};
  ${(props) => props.center && `text-align: center;`}
`;

export const PageH2Style = styled.h2`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  font-size: var(--mediumBig);
  font-weight: 700;
  line-height: 4rem;
  margin: ${(props) => (props.margin ? props.margin : `var(--medSpacing) 0`)};
  ${(props) => props.position && `position: ${props.position};`};
`;

export const PStyle = styled.p`
  color: ${(props) => (props.color ? props.color : "inherit")};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "left")};
`;
