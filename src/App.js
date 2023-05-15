import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import React from "react";
import classes from "./App.module.css";
import Catergories from "./Components/Categories/Categories";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.wrapper}>
        <SideBar />
        <div className={classes.innerWrapper}>
          <Catergories />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
