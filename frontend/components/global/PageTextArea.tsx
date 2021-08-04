import {
  PageContentContainerStyle,
  PageTextAreaStyle,
} from "./styles/Containers";

interface Props {
  children: React.ReactNode
}

export const PageTextArea = ({ children }: Props) => {
  const pageVariants = {
    start: { y: -10, opacity: 0 },
    in: { y: 0, opacity: 1 },
    out: { y: -10, opacity: 0 },
  };
  return (
    <PageContentContainerStyle
      variants={pageVariants}
      initial="start"
      animate="in"
      exit="out"
    >
      <PageTextAreaStyle>{children}</PageTextAreaStyle>
    </PageContentContainerStyle>
  );
};
