import classes from "./SideBar.module.css";

const Section = ({ data, getId, active, getClicked }) => {
  const clickHandler = (id) => {
    getId(id);
  };

  return (
    <div className={classes.border}>
      {data.map((item) => (
        <div
          key={item.id}
          className={`${getClicked === true ? classes.clicked_item : ""} ${
            classes.item
          } ${active === item.id ? classes.active : ""}
          `}
          onClick={() => {
            clickHandler(item.id);
          }}
        >
          <img alt="err" src={item.img}></img>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Section;
