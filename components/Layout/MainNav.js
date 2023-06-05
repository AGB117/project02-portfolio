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
    windowWidth.width < 1211 ? setMobileNav(true) : null;
    windowWidth.width > 1212 ? setMobileNav(false) : null;
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
    spaceTheme
      ? setSpaceThemeModal({
          color: "#fff",
          background: "hsla(283, 100%, 6%, 0.96)",
        })
      : setSpaceThemeModal({
          color: "#333",
          background: " hsla(0, 9%, 94%, 0.96)",
        });
  }, [spaceTheme]);

  const themeHandler = () => {
    setSpaceTheme(!spaceTheme);
  };
  useEffect(() => {
    if (spaceTheme && mobileNav) {
      document.body.style.fontFamily = "Space Mono, monospace";
      document.body.style.backgroundImage = "url('space.webp')";
      document.body.style.color = "#fff";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
    } else if (!spaceTheme && mobileNav) {
      document.body.style.fontFamily = "Georgia, serif";
      document.body.style.backgroundImage = "url('background.webp')";
      document.body.style.color = "#333";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
    }
    console.log(spaceTheme);
    //diffrenciate these for mobile vs desktop for the backgroundimages
    if (spaceTheme && !mobileNav) {
      document.body.style.fontFamily = "Space Mono, monospace";
      document.body.style.backgroundImage = "url('backgrounddesktop.webp')";
      document.body.style.color = "#fff";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
    } else if (!spaceTheme && !mobileNav) {
      document.body.style.fontFamily = "Georgia, serif";
      document.body.style.backgroundImage = "url('background.webp')";
      document.body.style.color = "#333";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
    }
    console.log(spaceTheme);
    console.log(mobileNav);
  }, [spaceTheme, mobileNav]);

  ////////////////////////////
  ////////Space theme/////////
  ///////////////////////////

  return (
    <Fragment>
      <nav className={classes.topBar}>
        <div className={classes.nameTop}>
          <div>Abner </div>
          <div>Gonzalez</div>
          <div>
            <button className={classes.themeChange} onClick={themeHandler}>
              Change to space theme
            </button>
          </div>
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
            <DotsThreeOutlineVertical
              size={40}
              color={spaceThemeModal.color}
              weight="fill"
            />
          </button>
        )}
        {mobileNav && modalOpen && (
          <button className={classes.navButton} onClick={navHandler}>
            <X size={40} color={spaceThemeModal.color} weight="bold" />
          </button>
        )}
      </nav>
    </Fragment>
  );
}
export default MainNav;
