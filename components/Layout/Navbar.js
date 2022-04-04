import NavItem from "./NavItem";


export default function Navbar(){
    return(
        <nav className="navBar p-2">
            <NavItem title="Compras" url="../purchases" icon="bi bi-journal-bookmark-fill" />
        </nav>
    )
}