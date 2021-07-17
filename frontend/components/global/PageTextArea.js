import {
  PageContentContainerStyle,
  PageTextAreaStyle,
} from "./styles/Containers";

export const PageTextArea = ({ children }) => {
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
