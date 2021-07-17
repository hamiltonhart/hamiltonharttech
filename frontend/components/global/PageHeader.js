import { AnimatePresence, motion } from "framer-motion";
import {
  FlexContainerStyle,
  PageHeaderContainerStyle,
  PageHeaderStyle,
} from "./styles/Containers";
import { Nav } from "./Nav";
import HHTLogo from "../../public/images/HamiltonHartTech_Logo.svg";
import MenuIcon from "../../public/images/icon-menu.svg";
import CloseIcon from "../../public/images/icon-close.svg";
import { useToggle } from "../../utilities/global.js/useToggle";
import Link from "next/link";

export const PageHeader = () => {
  const { isShowing, toggle } = useToggle();

  const variants = {
    open: {
      height: "auto",
    },
    closed: {
      height: "8rem",
      transition: {
        delay: 0.15,
        stiffness: 0,
      },
    },
  };

  const iconVariants = {
    hidden: {
      rotate: "0deg",
    },
    showing: {
      rotate: "360deg",
    },
    exit: {
      rotate: "0deg",
    },
  };

  return (
    <PageHeaderContainerStyle
      variants={variants}
      animate={isShowing ? "open" : "closed"}
    >
      <PageHeaderStyle>
        <FlexContainerStyle justifyContent="space-between">
          <Link href="/">
            <a>
              <img src={HHTLogo.src} alt="Hamilton Hart Tech Logo" />
            </a>
          </Link>
          {!isShowing && (
            <AnimatePresence exitBeforeEnter>
              <motion.img
                src={MenuIcon.src}
                alt="Menu Icon"
                style={{ maxWidth: "3rem" }}
                onClick={toggle}
                variants={iconVariants}
                initial="hidden"
                animate="showing"
                exit="exit"
              />
            </AnimatePresence>
          )}
          {isShowing && (
            <AnimatePresence exitBeforeEnter>
              <motion.img
                src={CloseIcon.src}
                alt="Close Icon"
                style={{ maxWidth: "4rem" }}
                onClick={toggle}
                variants={iconVariants}
                initial="hidden"
                animate="showing"
                exit="exit"
              />
            </AnimatePresence>
          )}
        </FlexContainerStyle>
        <AnimatePresence>
          {isShowing && <Nav toggle={toggle} />}
        </AnimatePresence>
      </PageHeaderStyle>
    </PageHeaderContainerStyle>
  );
};
