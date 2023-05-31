import Head from "next/head";
import LandingPage from "../components/landingpage/LandingPage";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Portfolio | Abner Gonzalez</title>
        <meta name="description" content="new website project" />
        <link rel="icon" type="image/x-icon" href="/favicon.webp" />
      </Head>
      <LandingPage />
    </Fragment>
  );
}

export default HomePage;
