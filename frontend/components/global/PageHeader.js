import { PageHeaderStyle } from "./styles/Containers";
import HHTLogo from "../../public/images/HamiltonHartTech_Logo.svg";
import MenuIcon from "../../public/images/icon-menu.svg";

export const PageHeader = () => {
  return (
    <PageHeaderStyle>
      <img src={HHTLogo.src} alt="Hamilton Hart Tech Logo" />
      <img src={MenuIcon.src} alt="Menu Icon" style={{ "max-width": "3rem" }} />
    </PageHeaderStyle>
  );
};
