import classes from "./Videos.module.scss";

const DUMMY_DATA = [
  {
    image: "image1",
    time: "12:00",
    name: "Dumb and Dumber",
    title: "The real Dune for the most expensive taste",
    views: "3M",
    date: "11 months",
    verified: true,
  },
  {
    image: "image2",
    time: "2:03",
    name: "Dumb and Dumber",
    title: "How about a little more",
    views: "10M",
    date: "11 months",
    verified: true,
  },
  {
    image: "image3",
    time: "23:21",
    name: "Dumb and Dumber",
    title: "Skyler i am the danger",
    views: "12k",
    date: "11 months",
    verified: false,
  },
  {
    image: "image4",
    time: "2:00",
    name: "Dumb and Dumber",
    title: "Going on a trip in our favorite rocket ship going through the sky",
    views: "3M",
    date: "11 months",
    verified: true,
  },
  {
    image: "image5",
    time: "2:00",
    name: "Dumb and Dumber",
    title: "Going on a trip in our favorite rocket ship going through the sky",
    views: "3M",
    date: "11 months",
    verified: true,
  },
];

const Videos = () => {
  return (
    <div className={classes.videos}>
      {DUMMY_DATA.map((data) => (
        <div>
          <div className={classes.photo}>
            <img alt="err" src={`/images/${data.image}.jpg`}></img>
            <h4>{data.time}</h4>
          </div>
          <div className={classes.text}>
            <h4>{data.title}</h4>
            <div>
              <p>{data.name}</p>
              {data.verified && <img alt="err" src="/svgs/check.svg"></img>}
            </div>
            <p>
              {data.views} views * {data.date} ago
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
