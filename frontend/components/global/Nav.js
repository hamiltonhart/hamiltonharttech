import Link from "next/link";
import { NavStyle } from "./styles/Containers";
import { motion } from "framer-motion";

const navContainer = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const navItems = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const navItemList = ["Home", "About", "Projects", "Contact", "Blog"];

export const Nav = ({ toggle, isShowing, className }) => {
  return (
    <NavStyle className={className}>
      <motion.ul
        variants={navContainer}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {navItemList.map((navItem) => (
          <motion.li key={navItem} variants={navItems}>
            <Link href={navItem === "Home" ? "/" : `/${navItem.toLowerCase()}`}>
              <a onClick={() => isShowing && toggle()}>{navItem}</a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </NavStyle>
  );
};
