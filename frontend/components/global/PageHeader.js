import { useState } from "react";
import { AnimatePresence, useSpring } from "framer-motion";
import {
  FlexContainerStyle,
  PageHeaderContainerStyle,
  PageHeaderStyle,
} from "./styles/Containers";
import { Nav } from "./Nav";
import HHTLogo from "../../public/images/HamiltonHartTech_Logo.svg";
import MenuIcon from "../../public/images/icon-menu.svg";
import { useToggle } from "../../utilities/global.js/useToggle";

export const PageHeader = () => {
  // const [isShowing, setIsShowing] = useState(false);
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

  return (
    <PageHeaderContainerStyle
      variants={variants}
      animate={isShowing ? "open" : "closed"}
    >
      <PageHeaderStyle>
        <FlexContainerStyle justifyContent="space-between">
          <img src={HHTLogo.src} alt="Hamilton Hart Tech Logo" />
          <img
            src={MenuIcon.src}
            alt="Menu Icon"
            style={{ "max-width": "3rem" }}
            onClick={() => toggle()}
          />
        </FlexContainerStyle>
        <AnimatePresence>
          {isShowing && <Nav toggle={toggle} />}
        </AnimatePresence>
      </PageHeaderStyle>
    </PageHeaderContainerStyle>
  );
};
