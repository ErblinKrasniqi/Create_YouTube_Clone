import { Link } from "react-router-dom";
import classes from "./SearchVideos.module.scss";

const DUMMY_DATA = [
  {
    id: "1",
    image: "image1",
    time: "12:00",
    name: "Dumb and Dumber",
    title: "The real Dune for the most expensive taste",
    views: "3M",
    date: "11 months",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus quibusdam hic facere tene",
    verified: true,
  },
  {
    id: "2",
    image: "image2",
    time: "2:03",
    name: "Dumb and Dumber",
    title: "How about a little more",
    views: "10M",
    date: "11 months",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus quibusdam hic facere tene",

    verified: true,
  },
  {
    id: "3",
    image: "image3",
    time: "23:21",
    name: "Dumb and Dumber",
    title: "Skyler i am the danger",
    views: "12k",
    date: "11 months",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus quibusdam hic facere tene",

    verified: false,
  },
  {
    id: "4",
    image: "image4",
    time: "2:00",
    name: "Dumb and Dumber",
    title: "Going on a trip in our favorite rocket ship going through the sky",
    views: "3M",
    date: "11 months",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus quibusdam hic facere tene",

    verified: true,
  },
  {
    id: "5",
    image: "image5",
    time: "2:00",
    name: "Dumb and Dumber",
    title: "Going on a trip in our favorite rocket ship going through the sky",
    views: "3M",
    date: "11 months",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus quibusdam hic facere tene",

    verified: true,
  },
];

const SearchVideos = () => {
  return (
    <div className={classes.videos}>
      {DUMMY_DATA.map((data) => (
        <Link key={data.id} to={`/watch/${data.id}`}>
          <div>
            <div className={classes.photo}>
              <img alt="err" src={`/images/${data.image}.jpg`}></img>
              <h4>{data.time}</h4>
            </div>
            <div className={classes.text}>
              <h4>{data.title}</h4>
              <p>
                {data.views} views * {data.date} ago
              </p>
              <div>
                <img
                  alt="err"
                  className={classes.channelPic}
                  src="/images/image1.jpg"
                ></img>
                <h5>{data.name}</h5>
                {data.verified && (
                  <img
                    className={classes.check}
                    alt="err"
                    src="/svgs/check.svg"
                  ></img>
                )}
              </div>
              <p>{data.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchVideos;
