import { AnimatePresence, motion } from "framer-motion";
import MenuIcon from "../../public/images/icon-menu.svg";
import CloseIcon from "../../public/images/icon-close.svg";
import { NavIconButtonStyle } from "./styles/Buttons";

export const NavMenuIcons = ({ toggle, isShowing }) => {
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
    <>
      <NavIconButtonStyle className="nav-mobile" onClick={toggle}>
        {!isShowing && (
          <AnimatePresence exitBeforeEnter>
            <motion.img
              className="nav-mobile"
              src={MenuIcon.src}
              alt="Menu Icon"
              style={{ width: "3rem" }}
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
              className="nav-mobile"
              src={CloseIcon.src}
              alt="Close Icon"
              style={{ width: "3rem" }}
              variants={iconVariants}
              initial="hidden"
              animate="showing"
              exit="exit"
            />
          </AnimatePresence>
        )}
      </NavIconButtonStyle>
    </>
  );
};
