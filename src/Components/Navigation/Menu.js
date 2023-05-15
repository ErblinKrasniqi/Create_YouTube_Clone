import classes from "./NavBar.module.css";
import { toggleMenu } from "../App/store";
import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const dispatch = useDispatch();
  
  return (
    <div className={classes.container}>
      <span onClick={()=> dispatch(toggleMenu())} className={classes.shadee}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 96 960 960"
          width="41"
        >
          <path d="M130.001 801.384V756h699.998v45.384H130.001Zm0-202.692v-45.384h699.998v45.384H130.001Zm0-202.692v-45.384h699.998V396H130.001Z" />
        </svg>
      </span>

      <img alt="err" className={classes.logo} src="/youtube.svg"></img>
    </div>
  );
};

export default Menu;
