import { useParams, useLocation } from "react-router-dom";
import Channel from "./Channel";
import classes from "./WatchVideo.module.scss";
import Description from "./Description";

const WatchVideo = () => {
  const location = useLocation();

  const shouldShowNavBar = location.pathname !== "/watch/:id";

  console.log(shouldShowNavBar);
  const { id } = useParams();

  console.log(id);
  return (
    <div className={classes.container}>
      <div className={classes.video}>
        <video src="/Videos/2.mp4" controls></video>
        <div className={classes.title}>
          <h3>This is just a exaple of a video that i got !</h3>
          <Channel />
          <Description />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
