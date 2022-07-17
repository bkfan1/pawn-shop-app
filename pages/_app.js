import "../styles/globals.css";
import Loader from "../components/misc/Loader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
