import {
  FullPageContainerStyle,
  PageContentContainerStyle,
} from "./styles/Containers";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";

export const Page = ({ children }) => {
  return (
    <FullPageContainerStyle>
      <PageHeader />
      <PageContentContainerStyle>{children}</PageContentContainerStyle>
      <PageFooter />
    </FullPageContainerStyle>
  );
};
