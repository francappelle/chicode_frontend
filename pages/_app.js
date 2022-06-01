import Layout from "../components/Layout";
import Head from "next/head";
import "../styles/globals.css";



function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/da7gjdcwj/image/upload/v1653990805/chicode/images/favicon-32x32_op3oif.png" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

