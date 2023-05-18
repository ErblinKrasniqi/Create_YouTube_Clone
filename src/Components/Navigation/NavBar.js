import Menu from "./Menu";
import classes from "./NavBar.module.scss";
import Profile from "./Profile";
import Search from "./Search";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <Menu />
      <Search />
      <Profile />
    </nav>
  );
};

export default NavBar;
