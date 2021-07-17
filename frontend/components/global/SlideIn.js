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

export const SlideIn = ({ children }) => {
  return (
    <motion.div variants={variants} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
};
