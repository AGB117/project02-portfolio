import classes from "./MainNav.module.css";
import { Fragment, useEffect, useState } from "react";
import NavModal from "../ui/NavModal";

function MainNav() {
  const [mobileNav, setMobileNav] = useState();
  const [windowWidth, setWindowWidth] = useState({ width: null });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const widthHandler = () => {
      setWindowWidth({ width: window.innerWidth });
    };
    window.addEventListener("resize", widthHandler);
    widthHandler();
  }, []);

  useEffect(() => {
    windowWidth.width <= 1000 ? setMobileNav(true) : null;
    windowWidth.width >= 1000 ? setMobileNav(false) : null;
  }, [windowWidth.width]);

  useEffect(() => {
    if (mobileNav === true) {
      document.body.style.overflow = "hidden";
    }

    if (mobileNav === false) {
      document.body.style.overflow = "scroll";
    }
  }, [mobileNav]);

  const navHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Fragment>
      <nav className={classes.topBar}>
        <div className={classes.nameTop}>
          <div>Abner </div>

          <div>Gonzalez</div>
        </div>

        {mobileNav && modalOpen && <NavModal />}

        {!mobileNav && (
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
        )}
        <button className={classes.navButton} onClick={navHandler}>
          click here for nav
        </button>
      </nav>
    </Fragment>
  );
}
export default MainNav;
