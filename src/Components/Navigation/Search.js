import DropDown from "./DropDown";
import classes from "./NavBar.module.scss";
import { useState } from "react";

const Search = () => {
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState("");

  function clickHandler(event) {
    let value = event.target.value;
    setSearch(value);
    if (value.length > 0) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  }

  return (
    <div className={classes.search}>
      <form>
        <input onChange={clickHandler} placeholder="Search"></input>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 96 960 960"
            width="40"
          >
            <path d="m787 909.333-254-254q-30.404 26.385-72.534 39.859-42.131 13.474-80.507 13.474-99.577 0-167.601-67.837t-68.024-167q0-99.162 67.837-167.162t166.515-68q98.677 0 167.495 67.884Q615 374.436 615 473.525q0 41.808-14.167 82.142Q586.666 596 561.333 625l255 254.333-29.333 30Zm-407.667-242q82.723 0 138.528-55.361 55.806-55.361 55.806-138.305 0-82.945-55.747-138.306Q462.173 280 379.392 280q-82.781 0-138.253 55.361-55.472 55.361-55.472 138.306 0 82.944 55.472 138.305 55.472 55.361 138.194 55.361Z" />
          </svg>
        </button>

        <div className={classes.microphone}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M480.118 629.153q-42.124 0-69.62-29.285-27.497-29.285-27.497-71.56V279.385q0-40.096 27.82-68.24t69.003-28.144q41.182 0 69.178 28.144 27.997 28.144 27.997 68.24v248.923q0 42.275-27.379 71.56-27.379 29.285-69.502 29.285Zm-29.81 313.846V802.614q-107.23-10.077-179.268-88.076-72.039-78-72.039-186.23h58.384q0 92.077 65.104 155.115 65.104 63.038 157.473 63.038 92.37 0 157.512-63.038 65.141-63.038 65.141-155.115h58.384q0 108.002-72.539 186.116-72.538 78.113-179.768 88.19v140.385h-58.384Z" />
          </svg>
        </div>
      </form>
      {clicked && <DropDown search={search}/>}
    </div>
  );
};

export default Search;
