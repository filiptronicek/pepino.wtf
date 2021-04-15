import "../css/index.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Pepino.wtf</title>
        <meta
          name="Description"
          content="What is Pepa currently up to?"
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
