import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../components/misc/Loader";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Loader/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
