import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import React from "react";
import classes from "./App.module.css";
import Catergories from "./Components/Categories/Categories";
import Videos from "./Components/Videos/Videos";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.wrapper}>
        <SideBar />
        <div className={classes.innerWrapper}>
          <Catergories />
          <Videos />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
