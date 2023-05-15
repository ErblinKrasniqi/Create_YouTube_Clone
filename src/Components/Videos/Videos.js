import Dots from "./Dots";
import classes from "./Videos.module.css";
import { useState } from "react";

const DUMMY_DATA = [
  {
    id: "1",
    title: "The oldest mountain range in the world",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "/images/image1.jpg",
    channelImage: "/images/profile1.jpg",
    videoLength: "2:01",
    verified: true,
  },
  {
    id: "2",
    title: "Reading a book in the library, but it's not what you think",
    channel: "Bixby",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "/images/image2.jpg",
    channelImage: "/images/profile2.jpg",
    videoLength: "5:05",
    verified: true,
  },
  {
    id: "3",
    title: "Going on a trip to hong kong",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "/images/image3.jpg",
    channelImage: "/images/profile3.jpg",
    videoLength: "20:10",
    verified: false,
  },
  {
    id: "4",
    title: "Life as a street racer in the forgotten city",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "/images/image4.jpg",
    channelImage: "/images/profile4.jpg",
    videoLength: "14:01",
    verified: true,
  },
];

const Videos = () => {
  const [active, setActive] = useState(1);
  const [toggle, setToggle] = useState(false);

  function getId(id) {
    setToggle(!toggle);
    setActive(id);
  }

  return (
    <div className={classes.container}>
      {DUMMY_DATA.map((data) => (
        <div key={data.id} className={classes.video}>
          <div className={classes.image}>
            <img alt="err" src={data.thumbNail}></img>
            <h5>{data.videoLength}</h5>
          </div>
          <div className={classes.videoInfo}>
            <img alt="err" src={data.channelImage}></img>

            <div className={classes.videoText}>
              <div className={classes.dots}>
                <h4>{data.title}</h4>
                <img onClick={()=> getId(data.id)} alt="err" src="/svgs/dots.svg"></img>
                {active === data.id && toggle === true ? <Dots /> : ""}
              </div>
              <div className={classes.verified}>
                <h4>{data.channel}</h4>
                {data.verified === true ? (
                  <img alt="err" src="/svgs/check.svg"></img>
                ) : (
                  ""
                )}
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
