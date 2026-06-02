import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header className="header">
        <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/quemsomospage">Quem Somos</Link>{" | "}
        <Link to="/cadfrutas">Frutas</Link>{" | "}
        <Link to="/produtos">Produtos</Link>
        </nav>
        </header>
    )

}