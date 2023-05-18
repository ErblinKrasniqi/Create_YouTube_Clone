import classes from "./NavBar.module.scss";

const DUMMY_DATA = [
  { id: 1, title: "This is the most watched" },
  { id: 2, title: "Why not this one?" },
  { id: 3, title: "Its a good one and you know it" },
  { id: 4, title: "How do you know if you dont try it?" },
  { id: 5, title: "Top 10 most watched and liked" },
  { id: 6, title: "This is the most watched" },
  { id: 7, title: "Why not this one?" },
  { id: 8, title: "Its a good one and you know it" },
  { id: 9, title: "How do you know if you dont try it?" },
  { id: 10, title: "Top 10 most watched and liked" },
  { id: 11, title: "This is the most watched" },
  { id: 12, title: "Why not this one?" },
  { id: 13, title: "Its a good one and you know it" },
  { id: 14, title: "How do you know if you dont try it?" },
];

const DropDown = ({ search }) => {
  const filteredData = DUMMY_DATA.filter((data) => {
    const regex = new RegExp(search, "i");
    return regex.test(data.title);
  });

  let limitedData = filteredData.slice(0, 10); // Limit to 5 items

  if (limitedData.length === 0) {
    limitedData = [{ id: 1, title: `${search}...` }];
  }

  return (
    <ul className={classes.typing}>
      {limitedData.map((data) => (
        <div key={data.id}>
          <img alt="err" src="/svgs/search.svg"></img>
          <li>{data.title}</li>
        </div>
      ))}
    </ul>
  );
};

export default DropDown;
