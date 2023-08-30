import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Link
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/CreateMovie"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add New Movie
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;