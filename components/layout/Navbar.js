import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="navBar is-flex is-align-items-center is-justify-content-center p-2">
      <NavItem title="Inicio" url="/" icon="bi bi-house" />
      <NavItem title="Joyas" url="/jewelry" icon="bi bi-gem" />
      <NavItem title="Préstamos" url="/loans" icon="bi bi-cash" />
      <NavItem title="Empeños" url="/pawns" icon="bi bi-briefcase" />
      <NavItem title="Clientes" url="/customers" icon="bi bi-people" />


    </nav>
  );
}
