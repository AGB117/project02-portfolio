import classes from "./LandingPage.module.css";
import Card from "../ui/Card";
import Link from "next/link";

function LandingPage(props) {
  return (
    <div className={classes.landingContainer}>
      <section id="about" className={classes.about}>
        <div className={classes.aboutTitle}>
          <h3>
            Web
            <div>Developer</div>
          </h3>
          <div className={classes.aboutText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non …Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            </p>
          </div>
        </div>
      </section>

      <section id="work" className={classes.work}>
        <h2>Work</h2>
        <div className={classes.cardContainer}>
          <Card>
            <div className={classes.workImg}>
              <img src="project01.webp" />
            </div>
            <div className={classes.linksContainer}>
              <div>
                <a href="https://project01-restaurant.vercel.app/">
                  <img src="/Vercel-modified.webp" />
                </a>
                <div>
                  <a href="https://project01-restaurant.vercel.app/">Vercel</a>
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
      </section>

      <section id="contact" className={classes.contact}>
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing e pariatur.
          Excepteur sint occaecat cupidatat non …Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim
        </p>
      </section>
    </div>
  );
}

export default LandingPage;
