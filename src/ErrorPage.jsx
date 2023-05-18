import { useRouteError } from "react-router-dom";
import classes from "./ErrorPage.module.scss";


const ErrorPage = () => {
    const error = useRouteError();

    console.log(error); 
  return (
    <div className={classes.image}>
      <img alt="err" src="./cat.gif"></img>
      <h1>😵‍💫 Page not found 😵‍💫 <br></br> {error.data} </h1>
    </div>
  );
};

export default ErrorPage;
