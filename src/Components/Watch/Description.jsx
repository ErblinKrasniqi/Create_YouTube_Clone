import classes from "./Description.module.scss";
import { useState } from "react";

const Description = () => {
  const [showMore, setShowMore] = useState(false);
  const showMoreHandler = () => {
    setShowMore(!showMore);
  };
  return (
    <div
      onClick={showMoreHandler}
      className={`${classes.description} ${showMore ? classes.showMore : ""}`}
    >
      <h4>4.1M views * 1 year ago</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quos, quae voluptate, quidem voluptas voluptatibus
        voluptatem doloribus natus doloremque quibusdam. Quisquam voluptatum,
        quos, quae voluptate, quidem voluptas voluptatibus voluptatem doloribus
        natus doloremque quibusdam. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quisquam voluptatum, quos, quae voluptate, quidem 😊
        voluptas voluptatibus voluptatem doloribus natus doloremque quibusdam.
        Quisquam voluptatum, quos, quae voluptate, quidem voluptas voluptatibus
        voluptatem doloribus natus doloremque quibusdam. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Quisquam voluptatum, quos, quae
        voluptate, quidem voluptas voluptatibus voluptatem doloribus natus
        doloremque quibusdam. Quisquam voluptatum, quos, quae voluptate, quidem
        voluptas voluptatibus voluptatem doloribus natus doloremque quibusdam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, quos, quae voluptate, quidem voluptas voluptatibus
        voluptatem doloribus natus doloremque quibusdam. Quisquam voluptatum,
        quos, quae voluptate, quidem voluptas voluptatibus voluptatem doloribus
        natus doloremque quibusdam.
      </p>
    </div>
  );
};

export default Description;
