import {
  FullPageContainerStyle,
  PageContentContainerStyle,
  PageTextArea,
} from "./styles/Containers";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { AnimatePresence, motion } from "framer-motion";

export const Page = ({ children }) => {
  return (
    <FullPageContainerStyle>
      <PageHeader />
      <PageContentContainerStyle>
        <AnimatePresence>
          <PageTextArea>{children}</PageTextArea>
        </AnimatePresence>
      </PageContentContainerStyle>
      <PageFooter />
    </FullPageContainerStyle>
  );
};
