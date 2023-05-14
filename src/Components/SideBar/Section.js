import classes from "./SideBar.module.css";
import { useState } from "react";

const Section = ({ data }) => {
  const [active, setActive] = useState(1);

  const clickHandler = (id) => {
    setActive(id);
  };

  return (
    <div className={classes.border}>
      {data.map((item, id) => (
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
        </div>
      ))}
    </div>
  );
};

export default Section;
