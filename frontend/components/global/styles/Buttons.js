import styled from "styled-components";

export const IconButtonStyle = styled.button`
  border-radius: 50%;
  padding: var(--smSpacing);
  background-color: transparent;
`;

export const NavIconButtonStyle = styled(IconButtonStyle)`
  justify-self: end;
`;
