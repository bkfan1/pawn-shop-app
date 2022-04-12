import { useRouter } from "next/router";
import NavItem from "./NavItem";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav
      className={`navBar is-flex is-justify-content-center p-2 ${
        pathname === "/"
          ? "is-flex-direction-column isMobileMenu is-align-items-center"
          : ""
      }`}
    >
      {pathname === "/" ? (
        <h1 className="title has-text-white">Pawn Shop App</h1>
      ) : (
        ""
      )}
      <div className="navItemsContainer is-flex">
        <NavItem title="Inicio" url="/" icon="bi bi-house" />
        <NavItem
          title="Joyeria"
          url="/purchases"
          icon="bi bi-gem"
        />
        <NavItem title="Préstamos" url="/loans" icon="bi bi-cash" />
      </div>
    </nav>
  );
}
