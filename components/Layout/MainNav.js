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
              <a src="about">About</a>
            </li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
export default MainNav;
