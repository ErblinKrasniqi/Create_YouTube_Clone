import classes from "./Categories.module.scss";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setMenuValue } from "../App/store";
import anime from "animejs";

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
  { id: 16, name: "Loungewear" },
  { id: 17, name: "Sportswear" },
];

let counter = 0;

const Catergories = () => {
  const [clicked, setClicked] = useState(1);
  const dispatch = useDispatch();
  const containerRef = useRef(null);
  const itemsRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  function clickHandler(id, tag) {
    setClicked(id);
    dispatch(setMenuValue(tag));
  }

  function slideItems(id) {
    console.log(counter);
    if (id === -1 && isAnimating) {
      return;
    } // Stop sliding if already animating left
    if (id === -2 && isAnimating) {
      return;
    } // Stop sliding if already animating right

    if (id === -1) {
      counter--;
    }
    if (id === -2) {
      counter++;
    }

    const items = containerRef.current.children;

    if (counter >= 3) {
      counter = 2;
      return;
    }
    if (counter < 0) {
      counter = 0;
      return;
    }

    setIsAnimating(true);

    anime({
      targets: items,
      translateX: id === -1 ? "+=183px" : "-=183px",
      easing: "easeInOutSine",
      duration: 500,
      complete: () => {
        setIsAnimating(false);
      },
    });
  }

  return (
    <div className={classes.container}>
      <div className={classes.shade}>
        <img
          alt="err"
          src="/svgs/arrowLeft.svg"
          onClick={() => slideItems(-1)}
        />
      </div>
      <div ref={containerRef} className={classes.itemsContainer}>
        <div ref={itemsRef} className={classes.items}>
          {DUMMY_CATEGORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => clickHandler(item.id, item.name)}
              className={`${classes.catergorie} ${
                clicked === item.id ? classes.active : classes.hovering
              }`}
            >
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.shadeRight}>
        <img
          alt="err"
          src="/svgs/arrowRight.svg"
          onClick={() => slideItems(-2)}
        />
      </div>
    </div>
  );
};

export default Catergories;
