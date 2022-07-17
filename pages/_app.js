import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/misc/Loader";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
