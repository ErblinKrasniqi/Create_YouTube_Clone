import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <SideBar />
    </React.Fragment>
  );
}

export default App;
