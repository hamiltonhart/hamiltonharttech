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
import { NavMenuIcons } from "./NavMenuIcons";

interface Props {}

export const PageHeader = ({}: Props) => {
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
        <Link href="/">
          <a>
            <img src={HHTLogo.src} alt="Hamilton Hart Tech Logo" />
          </a>
        </Link>
        <NavMenuIcons toggle={toggle} isShowing={isShowing} />
        <Nav className="nav-desktop" toggle={toggle} isShowing={isShowing} />
        <AnimatePresence>
          {isShowing && (
            <Nav toggle={toggle} isShowing={isShowing} className="nav-mobile" />
          )}
        </AnimatePresence>
      </PageHeaderStyle>
    </PageHeaderContainerStyle>
  );
};
