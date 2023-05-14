import classes from "./SideBar.module.css";
import { useState } from "react";

const DUMMY_DATA = [
  { id: 1, img: "/svgs/home.svg", name: "Home" },
  { id: 2, img: "/svgs/podcasts.svg", name: "Search" },
  { id: 3, img: "/svgs/history.svg", name: "Home" },
  { id: 4, img: "/svgs/music.svg", name: "Home" },
];

const SdieBar = () => {
  const [active, setActive] = useState(1);

  const clickHandler = (id) => {
    setActive(id);
  };

  return (
    <div className={classes.sideBar}>
      <div className={classes.border}>
        {DUMMY_DATA.map((item, id) => (
          <div
            key={item.id}
            className={`${classes.item} ${
              active === item.id ? classes.active : ""
            }`}
            onClick={() => {
              clickHandler(item.id);
            }}
          >
            <img alt="err" src={item.img}></img>
            <h1>{item.name}</h1>
            {console.log(id)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SdieBar;
