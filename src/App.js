import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import React from "react";
import classes from "./App.module.css";
import Catergories from "./Components/Categories/Categories";
import Videos from "./Components/Videos/Videos";
import SideVideos from "./Components/Watch/Videos";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./Components/Watch/WatchVideo";
import SearchVideos from "./Components/SearchVideos/SeacrhVideos";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
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
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/watch/:id",
    element: (
      <React.Fragment>
        <NavBar />
        <div className={classes.wrapper}>
          <WatchVideo />
          <SideVideos />
        </div>
      </React.Fragment>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/results/:input",
    element: (
      <React.Fragment>
        <NavBar />
        <div className={classes.wrapper}>
          <SideBar />
          <SearchVideos />
        </div>
      </React.Fragment>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
