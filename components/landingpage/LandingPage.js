import classes from "./LandingPage.module.css";
import Card from "../ui/Card";
import Link from "next/link";
import { CalendarBlank, MapPin } from "@phosphor-icons/react";

function LandingPage(props) {
  return (
    <div className={classes.landingContainer}>
      <section id="about" className={classes.about}>
        <h2>
          Web
          <div>Developer</div>
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non …Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim
        </p>
      </section>

      <section id="education" className={classes.education}>
        <h2>Education</h2>
        <h1>Research assistant</h1>
        <p>Florida Polytechnic University</p>
        <div className={classes.eduDateLocContainer}>
          <div className={classes.eduDate}>
            <div className={classes.iconContainer}>
              <CalendarBlank size={32} />
            </div>
            <div>Feb 2014 - Present</div>
          </div>
          <div className={classes.eduLoc}>
            <div className={classes.iconContainerMap}>
              <MapPin size={32} />
            </div>
            <div>Bartow, FL</div>
          </div>
        </div>
        <div>
          <ul>
            <li>worked</li>
            <li>Hello</li>
            <li>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non …Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </li>
          </ul>
        </div>
      </section>

      <section id="skills" className={classes.skills}>
        <h2>Skills</h2>
        <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>React JS</li>
            <li>Next JS</li>
            <li>Vercel</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </section>

      <section id="work" className={classes.work}>
        <h2>Work</h2>
        <div className={classes.cardContainer}>
          <div className={classes.cardFlexCenter}>
            <Card>
              <div className={classes.workImg}>
                <img src="project01.webp" />
              </div>
              <div className={classes.projectName}>Restaurant Project</div>
              <div className={classes.linksContainer}>
                <div>
                  <a href="https://project01-restaurant.vercel.app/">
                    <img src="/Vercel-modified.webp" />
                  </a>
                  <div>
                    <a href="https://project01-restaurant.vercel.app/">
                      Vercel
                    </a>
                  </div>
                </div>
                <div>
                  <Link href="https://github.com/AGB117/project01-restaurant">
                    <img src="/githubcircle-modified.webp" />
                  </Link>
                  <div>
                    <a href="https://github.com/AGB117/project01-restaurant">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* <div className={classes.cardFlexCenter}>
            <Card>
              <div className={classes.workImg}>
                <img src="project01.webp" />
              </div>
              <div className={classes.projectName}>Restaurant Project</div>
              <div className={classes.linksContainer}>
                <div>
                  <a href="https://project01-restaurant.vercel.app/">
                    <img src="/Vercel-modified.webp" />
                  </a>
                  <div>
                    <a href="https://project01-restaurant.vercel.app/">
                      Vercel
                    </a>
                  </div>
                </div>
                <div>
                  <Link href="https://github.com/AGB117/project01-restaurant">
                    <img src="/githubcircle-modified.webp" />
                  </Link>
                  <div>
                    <a href="https://github.com/AGB117/project01-restaurant">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className={classes.cardFlexCenter}>
            <Card>
              <div className={classes.workImg}>
                <img src="project01.webp" />
              </div>
              <div className={classes.projectName}>Restaurant Project</div>
              <div className={classes.linksContainer}>
                <div>
                  <a href="https://project01-restaurant.vercel.app/">
                    <img src="/Vercel-modified.webp" />
                  </a>
                  <div>
                    <a href="https://project01-restaurant.vercel.app/">
                      Vercel
                    </a>
                  </div>
                </div>
                <div>
                  <Link href="https://github.com/AGB117/project01-restaurant">
                    <img src="/githubcircle-modified.webp" />
                  </Link>
                  <div>
                    <a href="https://github.com/AGB117/project01-restaurant">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div> */}
        </div>
      </section>

      <section id="contact" className={classes.contact}>
        <h2>Contact</h2>
        <div className={classes.contactLinks}>
          <ul>
            <li>abner.gonzalez4@gmail.com</li>
            <li>
              <a href="https://www.linkedin.com/in/abner-gonzalez/">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/AGB117">Github</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
