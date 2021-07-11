import { PageContainerStyle, PageTextArea } from "./styles/Containers";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";

export const Page = ({ children }) => {
  return (
    <>
      <PageHeader />
      <PageContainerStyle>
        <PageTextArea>{children}</PageTextArea>
      </PageContainerStyle>
      <PageFooter />
    </>
  );
};
