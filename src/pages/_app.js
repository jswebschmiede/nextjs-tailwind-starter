import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Generated by create next app' />
        <title>Fashion Shop</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;