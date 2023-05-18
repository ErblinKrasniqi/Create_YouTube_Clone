import classes from "./Videos.module.scss";

const Dots = () => {
    return (
        <div className={classes.clickedDot}>
        <div className={classes.dotItem}>
          <img alt="err" src="/svgs/fire.svg"></img>
          <h4>Add to queue</h4>
        </div>
        <div className={classes.dotItem}>
          <img alt="err" src="/svgs/alert.svg"></img>
          <h4>Share</h4>
        </div>
      </div>
    );
};

export default Dots;