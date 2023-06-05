import classes from "./MainNav.module.css";
import { Fragment, useEffect, useState } from "react";
import NavModal from "../ui/NavModal";
import { DotsThreeOutlineVertical, X } from "@phosphor-icons/react";

function MainNav(props) {
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
    if (modalOpen === true) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [modalOpen]);

  const navHandler = () => {
    console.log(modalOpen);
    setModalOpen(!modalOpen);
    console.log(modalOpen);
  };

  console.log(modalOpen);
  return (
    <Fragment>
      <nav className={classes.topBar}>
        <div className={classes.nameTop}>
          <div>Abner </div>

          <div>Gonzalez</div>
        </div>

        {mobileNav && modalOpen && <NavModal closeOpenNav={navHandler} />}

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
                <a onClick={navHandler} href="#experience">
                  Experience
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
        {mobileNav && !modalOpen && (
          <button className={classes.navButton} onClick={navHandler}>
            <DotsThreeOutlineVertical size={40} color="#333" weight="fill" />
          </button>
        )}
        {mobileNav && modalOpen && (
          <button className={classes.navButton} onClick={navHandler}>
            <X size={40} color="#333" />
          </button>
        )}
      </nav>
    </Fragment>
  );
}
export default MainNav;
