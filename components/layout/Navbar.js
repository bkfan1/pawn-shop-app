import NavItem from "./NavItem";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const {pathname} = router;
  return (
    <nav className={`navBar is-flex is-align-items-center is-justify-content-center p-2 ${pathname === "/" ? "navBar__mobileStyles": ""} `}>
      <NavItem title="Inicio" url="/" icon="bi bi-house" />
      <NavItem title="Joyas" url="/jewelry" icon="bi bi-gem" />
      <NavItem title="Préstamos" url="/loans" icon="bi bi-cash" />
      <NavItem title="Empeños" url="/pawns" icon="bi bi-briefcase" />
    </nav>
  );
}
