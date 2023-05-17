import "./App.css";
import NavBar from "./Components/Navigation/NavBar";
import SideBar from "./Components/SideBar/SideBar";
import React from "react";
import classes from "./App.module.css";
import Catergories from "./Components/Categories/Categories";
import Videos from "./Components/Videos/Videos";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./Components/Watch/WatchVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <SideBar />
        <div className={classes.innerWrapper}>
          <Catergories />
          <Videos />
        </div>
      </React.Fragment>
    ),
    errorElement: <ErrorPage />,
  },
  { path: "/watch/:id", element: <WatchVideo />, errorElement: <ErrorPage /> },
]);

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className={classes.wrapper}>
        <RouterProvider router={router} />
      </div>
    </React.Fragment>
  );
}

export default App;
