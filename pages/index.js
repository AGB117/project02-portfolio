import Head from "next/head";
import LandingPage from "../components/landingpage/LandingPage";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>New App</title>
        <meta name="description" content="new website project" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </Fragment>
  );
}

export default HomePage;
