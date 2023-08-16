import "@/styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Analytics } from "@vercel/analytics/react";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default App;
