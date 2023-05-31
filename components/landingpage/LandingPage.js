import classes from "./LandingPage.module.css";

function LandingPage(props) {
  return (
    <div className={classes.landing}>
      <p>Georgia default</p>

      <p style={{ fontFamily: "Space Mono, monospace" }}>
        "Space Mono, monospace"
      </p>
    </div>
  );
}

export default LandingPage;
