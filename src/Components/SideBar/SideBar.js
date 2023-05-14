import Section from "./Section";
import classes from "./SideBar.module.css";



const SdieBar = () => {

  const DUMMY_DATA = [
    { id: 1, img: "/svgs/home.svg", name: "Home" },
    { id: 2, img: "/svgs/podcasts.svg", name: "Search" },
    { id: 3, img: "/svgs/history.svg", name: "Home" },
    { id: 4, img: "/svgs/music.svg", name: "Home" },
  ];


  return (
    <div className={classes.sideBar}>
      <Section data={DUMMY_DATA}/>
    </div>
  );
};

export default SdieBar;
