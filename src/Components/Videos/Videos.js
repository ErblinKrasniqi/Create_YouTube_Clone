import Dots from "./Dots";
import classes from "./Videos.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

const DUMMY_DATA = [
  {
    id: "1",
    title: "The oldest mountain range in the world",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "image1",
    channelImage: "profile1",
    videoLength: "2:01",
    tags: [
      "All",
      "Shirts",
      "Shoes",
      "Accessories",
      "Hats",
      "Socks",
      "Underwear",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: true,
  },
  {
    id: "2",
    title: "Reading a book in the library, but it's not what you think",
    channel: "Bixby",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "image2",
    channelImage: "profile2",
    videoLength: "5:05",
    tags: [
      "All",
      "Shirts",
      "Pants",
      "Shoes",
      "Accessories",
      "Socks",
      "Underwear",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: true,
  },
  {
    id: "3",
    title: "Going on a trip to hong kong",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "image3",
    channelImage: "profile3",
    videoLength: "20:10",
    tags: [
      "All",
      "Shirts",
      "Shoes",
      "Accessories",
      "Hats",
      "Socks",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: false,
  },
  {
    id: "4",
    title: "Life as a street racer in the forgotten city",
    channel: "Channel Name",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "image4",
    channelImage: "profile4",
    videoLength: "14:01",
    tags: [
      "All",
      "Shirts",
      "Pants",
      "Shoes",
      "Hats",
      "Socks",
      "Underwear",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: true,
  },
  {
    id: "5",
    title: "The oldest mountain range in the world",
    channel: "Explotion TV",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "image5",
    channelImage: "profile5",
    videoLength: "2:01",
    tags: [
      "All",
      "Shirts",
      "Shoes",
      "Accessories",
      "Hats",
      "Socks",
      "Underwear",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: true,
  },
  {
    id: "6",
    title: "The oldest mountain range in the world",
    channel: "Jackie Chan",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "image6",
    channelImage: "profile6",
    videoLength: "6:01",
    tags: [
      "All",
      "Shirts",
      "Shoes",
      "Accessories",
      "Hats",
      "Socks",
      "Underwear",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: true,
  },
  {
    id: "7",
    title: "The oldest mountain range in the world",
    channel: "Strangers",
    views: "180k",
    date: "1",
    time: "year",
    thumbNail: "image7",
    channelImage: "profile7",
    videoLength: "34:01",
    tags: [
      "All",
      "Shirts",
      "Shoes",
      "Accessories",
      "Hats",
      "Socks",
      "Underwear",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: true,
  },
  {
    id: "8",
    title: "The oldest mountain range in the world",
    channel: "Cloutes",
    views: "130k",
    date: "1",
    time: "year",
    thumbNail: "image8",
    channelImage: "profile8",
    videoLength: "2:01",
    tags: [
      "All",
      "Shirts",
      "Shoes",
      "Accessories",
      "Hats",
      "Socks",
      "Underwear",
      "Bags",
      "Jackets",
      "Sweaters",
      "Suits",
      "Shorts",
      "Swimwear",
      "Sleepwear",
    ],
    verified: true,
  },
];

const Videos = () => {
  const [active, setActive] = useState(1);
  const [toggle, setToggle] = useState(false);
  // const [data, setData] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:5000/create");
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log(data);

  const selectMenuValue = useSelector((state) => state.selectMenu.value);

  function getId(id) {
    setToggle(!toggle);
    setActive(id);
  }

  const DUMMY_DATA_FILTERED = DUMMY_DATA.filter((data) => {
    return data.tags.includes(selectMenuValue);
  });

  return (
    <div className={classes.container}>
      {DUMMY_DATA_FILTERED.map((item) => (
        <div key={item.id} className={classes.video}>
          <div className={classes.image}>
            <Link to={`/watch/${item.id}`}>
              <img alt="err" src={`/images/${item.thumbNail}.jpg`}></img>
            </Link>
            <h5>{item.videoLength}</h5>
          </div>
          <div className={classes.videoInfo}>
            <img alt="err" src={`/images/${item.channelImage}.jpg`}></img>

            <div className={classes.videoText}>
              <div className={classes.dots}>
                <h4>{item.title}</h4>
                <img
                  onClick={() => getId(item.id)}
                  alt="err"
                  src="/svgs/dots.svg"
                ></img>
                {active === item.id && toggle === true ? <Dots /> : ""}
              </div>
              <div className={classes.verified}>
                <h4>{item.channel}</h4>
                {item.verified === true ? (
                  <img alt="err" src="/svgs/check.svg"></img>
                ) : (
                  ""
                )}
              </div>
              <h2 className={classes.views}>
                {item.views} views * {item.time} ago
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
