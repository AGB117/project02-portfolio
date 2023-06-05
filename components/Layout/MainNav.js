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
    setModalOpen(!modalOpen);
  };

  ////////////////////////////
  ////////Space theme/////////
  ///////////////////////////
  const [spaceTheme, setSpaceTheme] = useState(false);
  const [spaceThemeModal, setSpaceThemeModal] = useState(null);
  useEffect(() => {
    spaceTheme ? setSpaceThemeModal("#fff") : setSpaceThemeModal("#333");
    //send an object here with color and background color for the backdrop and done
  }, [spaceTheme]);

  const themeHandler = () => {
    setSpaceTheme(!spaceTheme);
  };
  useEffect(() => {
    if (spaceTheme === true) {
      document.body.style.fontFamily = "Space Mono, monospace";
      document.body.style.backgroundImage = "url('space.webp')";
      document.body.style.color = "#fff";
    } else {
      document.body.style.fontFamily = "Georgia, serif";
      document.body.style.backgroundImage = "url('background.webp')";
      document.body.style.color = "#333";
    }
    console.log(spaceTheme);
  }, [spaceTheme]);

  ////////////////////////////
  ////////Space theme/////////
  ///////////////////////////

  return (
    <Fragment>
      <nav className={classes.topBar}>
        <div className={classes.nameTop}>
          <div>Abner </div>

          <div>Gonzalez</div>
          <section>
            <div>
              <button className={classes.themeChange} onClick={themeHandler}>
                Change to space theme
              </button>
            </div>
          </section>
        </div>

        {mobileNav && modalOpen && (
          <NavModal colorModal={spaceThemeModal} closeOpenNav={navHandler} />
        )}

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
