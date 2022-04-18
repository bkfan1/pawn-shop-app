import Footer from "./Footer";
import Navbar from "./Navbar";
import NavItem from "./NavItem";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="is-flex is-flex-direction-column is-align-items-center is-justify-content-center">{children}</main>
      <Footer />
    </>
  );
}
