import classes from "./NavModal.module.css";
import { Fragment, useEffect } from "react";

function NavModal({ closeOpenNav, colorModal }) {
  console.log(colorModal);
  useEffect(() => {
    console.log(colorModal);
  }, [colorModal]);
  return (
    <Fragment>
      <div
        style={{
          color: `${colorModal.color}`,
        }}
        className={classes.modal}
      >
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
              <a onClick={closeOpenNav} href="#Portfolio Projects">
                Portfolio Projects
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
      <div
        style={{
          background: `${colorModal.background}`,
        }}
        className={classes.backdrop}
      ></div>
    </Fragment>
  );
}
export default NavModal;
