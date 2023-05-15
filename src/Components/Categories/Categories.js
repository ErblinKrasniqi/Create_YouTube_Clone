import classes from "./Categories.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMenuValue } from "../App/store";

const DUMMY_CATEGORIES = [
  { id: 1, name: "All" },
  { id: 2, name: "Shirts" },
  { id: 3, name: "Pants" },
  { id: 4, name: "Shoes" },
  { id: 5, name: "Accessories" },
  { id: 6, name: "Hats" },
  { id: 7, name: "Socks" },
  { id: 8, name: "Underwear" },
  { id: 9, name: "Bags" },
  { id: 10, name: "Jackets" },
  { id: 11, name: "Sweaters" },
  { id: 12, name: "Suits" },
  { id: 13, name: "Shorts" },
  { id: 14, name: "Swimwear" },
  { id: 15, name: "Sleepwear" },
];

const Catergories = () => {
  const [clicked, setClicked] = useState(1);

  const dispatch = useDispatch();

  function clickHandler(id, tag) {
    setClicked(id);
    dispatch(setMenuValue(tag));
  }

  return (
    <div className={classes.container}>
      <div className={classes.shade}>
        <img alt="err" src="/svgs/arrowLeft.svg"></img>
      </div>
      {DUMMY_CATEGORIES.map((item) => (
        <div
          onClick={() => {
            clickHandler(item.id, item.name);
          }}
          key={item.id}
          className={`${classes.catergorie} ${
            clicked === item.id ? classes.active : classes.hovering
          }`}
        >
          <h1>{item.name}</h1>
        </div>
      ))}
      <div className={classes.shadeRight}>
        <img alt="err" src="/svgs/arrowRight.svg"></img>
      </div>
    </div>
  );
};

export default Catergories;
