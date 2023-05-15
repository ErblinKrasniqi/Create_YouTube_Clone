import classes from "./Videos.module.css";

const DUMMY_DATA = [
  {
    title: "Video Title in the west",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "/images/image1.jpg",
    channelImage: "/images/profile1.jpg",
    videoLength: "2:01",
  },
  {
    title: "Just goingon a jureny on my way of finding the trueth",
    channel: "Bixby",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "/images/image2.jpg",
    channelImage: "/images/profile2.jpg",
    videoLength: "2:05",
  },
  {
    title: "Video Title in the west",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "/images/image3.jpg",
    channelImage: "/images/profile3.jpg",
    videoLength: "2:01",
  },
];

const Videos = () => {
  return (
    <div className={classes.container}>
      {DUMMY_DATA.map((data) => (
        <div className={classes.video}>
          <div className={classes.image}>
            <img alt="err" src={data.thumbNail}></img>
            <h5>{data.videoLength}</h5>
          </div>
          <div className={classes.videoInfo}>
            <img alt="err" src={data.channelImage}></img>

            <div className={classes.videoText}>
              <div className={classes.dots}>
                <h4>{data.title}</h4>

                <img src="/svgs/dots.svg"></img>
              </div>
              <div className={classes.verified}>
                <h4>{data.channel}</h4>
                <img alt="err" src="/svgs/check.svg"></img>
              </div>
              <h2 className={classes.views}>
                {data.views} views * {data.time} ago
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
