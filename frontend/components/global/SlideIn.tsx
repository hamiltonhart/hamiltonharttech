import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 80,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
    },
  },
};

interface Props {
  children: React.ReactNode
}

export const SlideIn = ({ children }: Props) => {
  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};
