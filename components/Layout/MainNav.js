import { Fragment } from "react";
import classes from "./MainNav.module.css";

function MainNav() {
  return (
    <Fragment>
      <div className={classes.topBar}>
        <div className={classes.nameTop}> Abner Gonzalez</div>
        <div className={classes.navLinks}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
export default MainNav;
