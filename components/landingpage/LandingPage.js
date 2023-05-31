import classes from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <div className={classes.landingContainer}>
      <section id="about" className={classes.about}>
        <div className={classes.aboutTitle}>
          <h3>
            Web
            <div>Designer</div>
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
    </div>
  );
}

export default LandingPage;
