import ItemContainer from "./ItemContainer";
import css from './MainContainer.module.css'
import { Link } from "react-router-dom";

function MainContainer() {
  return (
    <div
      className={`d-flex align-items-center justify-content-center flex-wrap p-5 gap-4 `}
      style={{ minHeight: "65vh" , textDecoration: "none"}}
    >
      <Link to="/todo" className={css.linknostyle}>
        <ItemContainer
          appTitle="To-Do App"
          appImg="ToDo.png"
          appDescription="YOU CAN ADD YOUR DAILY TASK HERE."
        />
      </Link>
      <Link to="/calc" className={css.linknostyle}>
        <ItemContainer
          appTitle="Age Calculator"
          appImg="clac.png"
          appDescription="YOU CAN CALCULATE YOUR AGE HERE."
        />
      </Link>
      <Link to="/whether" className={css.linknostyle}>
        <ItemContainer
          appTitle="Whether App"
          appImg="whether.png"
          appDescription="YOU CAN CHECK WHETHER DETAILS HERE."
        />
      </Link>
    </div>
  );
}

export default MainContainer;
