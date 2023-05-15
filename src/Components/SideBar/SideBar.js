import Section from "./Section";
import classes from "./SideBar.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

const SdieBar = () => {

  const [active, setActive] = useState(1);
  
  const toggleMenu = useSelector((state) => state.menuToggle)
  const DUMMY_DATA = [
    { id: 1, img: "/svgs/home.svg", name: "Home" },
    { id: 2, img: "/svgs/podcasts.svg", name: "Podcast" },
    { id: 3, img: "/svgs/history.svg", name: "History" },
    { id: 4, img: "/svgs/music.svg", name: "Music" },
  ];

  const DUMMY_DATA_2 = [
    { id: 5, img: "/svgs/sports.svg", name: "Sports" },
    { id: 6, img: "/svgs/Shopping.svg", name: "Shoping" },
    { id: 7, img: "/svgs/Subscriptions.svg", name: "Subscriptions" },
    { id: 8, img: "/svgs/videos.svg", name: "Videos" },
  ];

  function getId(id) {
    setActive(id);
  }

  return (
    <div className={`${classes.sideBar} ${toggleMenu === true ? classes.clicked_sideBar : ''}`}>
      <Section getClicked={toggleMenu} getId={getId} data={DUMMY_DATA} active={active} />
      <Section getClicked={toggleMenu} getId={getId} data={DUMMY_DATA_2} active={active} />
    </div>
  );
};

export default SdieBar;
