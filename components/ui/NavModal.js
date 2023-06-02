import classes from "./NavModal.module.css";
import { Fragment } from "react";

function NavModal({ navHandler }) {
  return (
    <Fragment>
      <div className={classes.modal}>
        <div className={classes.navLinks}>
          <ul>
            <li>
              <a onClick={navHandler} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={navHandler} href="#education">
                Education
              </a>
            </li>
            <li>
              <a onClick={navHandler} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={navHandler} href="#work">
                Work
              </a>
            </li>
            <li>
              <a onClick={navHandler} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.backdrop}></div>
    </Fragment>
  );
}
export default NavModal;
