import {
  FullPageContainerStyle,
  PageContentContainerStyle,
} from "./styles/Containers";
import {PageTextArea} from "./PageTextArea";
import { PageHeader } from "./PageHeader";
import { PageFooter } from "./PageFooter";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const Page = ({ children }: Props) => {
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
