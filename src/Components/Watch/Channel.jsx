import classes from "./WatchVideo.module.scss";

const channel = () => {
  return (
    <div className={classes.channel}>
      <div className={classes.image}>
        <img alt="err" src="/images/profile1.jpg"></img>
      </div>
      <div className={classes.name}>
        <div>
          <h4>Channel Name</h4>
          <img alt="err" src="/svgs/check.svg"></img>
        </div>
        <p>1.5M subscribers</p>
      </div>
      <div className={classes.subscribe}>
        <button>SUBSCRIBE</button>
      </div>
      <div className={classes.buttons}>
        <div className={classes.like}>
          <div>
            <img alt="err" src="/svgs/like.svg"></img>
            <p>1.5k</p>
          </div>
          <img alt="err" src="/svgs/dislike.svg"></img>
        </div>
        <div className={classes.share}>
          <img alt="err" src="/svgs/share.svg"></img>
          <p>Share</p>
        </div>

        <div className={classes.share}>
          <img alt="err" src="/svgs/save.svg"></img>
          <p>Save</p>
        </div>

        <div className={classes.dots}>
          <img alt="err" src="/svgs/horizontalDots.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default channel;
