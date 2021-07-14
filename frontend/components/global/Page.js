import {
  FullPageContainerStyle,
  PageContentContainerStyle,
  PageTextArea,
} from "./styles/Containers";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";

export const Page = ({ children }) => {
  return (
    <FullPageContainerStyle>
      <PageHeader />
      <PageContentContainerStyle>
        <PageTextArea>{children}</PageTextArea>
      </PageContentContainerStyle>
      <PageFooter />
    </FullPageContainerStyle>
  );
};
