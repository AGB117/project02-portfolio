import classes from "./NavModal.module.css";
import { Fragment, useEffect } from "react";

function NavModal({ closeOpenNav, colorModal }) {
  console.log(colorModal);
  useEffect(() => {
    console.log(colorModal);
  }, [colorModal]);
  return (
    <Fragment>
      <div style={{ color: `${colorModal}` }} className={classes.modal}>
        <div className={classes.navLinks}>
          <ul>
            <li>
              <a onClick={closeOpenNav} href="#about">
                About
              </a>
            </li>
            <li>
              <a onClick={closeOpenNav} href="#education">
                Education
              </a>
            </li>
            <li>
              <a onClick={closeOpenNav} href="#experience">
                Experience
              </a>
            </li>
            <li>
              <a onClick={closeOpenNav} href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a onClick={closeOpenNav} href="#work">
                Work
              </a>
            </li>
            <li>
              <a onClick={closeOpenNav} href="#contact">
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
