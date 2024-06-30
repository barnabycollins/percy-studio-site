import { NavLogo } from "./Logo";
import { TopNav } from "./Top";
import { RightNav } from "./Right";
import { NavSidebar } from "./Sidebar";
import { NavSpacer } from "./Spacer";
import layoutStyles from "./layout.module.css";

const Nav = {
  Logo: NavLogo,
  Main: TopNav,
  Right: RightNav,
  Spacer: NavSpacer,
  Sidebar: NavSidebar,
};

export function MainNav() {
  return (
    <nav className={layoutStyles.mainNav}>
      <nav className={layoutStyles.navLogo}>
        <Nav.Logo />
      </nav>
      <nav className={layoutStyles.navLeft}>
        <Nav.Spacer />
      </nav>
      <nav className={layoutStyles.navMain}>
        <Nav.Main />
      </nav>
      <nav className={layoutStyles.navRight}>
        <Nav.Right />
      </nav>
      <nav className={layoutStyles.sidebar}>
        <Nav.Sidebar />
      </nav>
    </nav>
  );
}
