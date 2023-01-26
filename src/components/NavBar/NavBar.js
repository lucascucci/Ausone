import { Link } from "react-router-dom";
import './navBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div>
            <ul className="ul">
                <ul>
                    <Link className="home" to="/">Inicio</Link>
                </ul>
                <ul>
                    <Link className="produ" to="/productos">Productos</Link>
                </ul>
                <ul>
                    <Link className="figura" to={'/categoria/namco'}>Figuras Namco</Link>
                </ul>
                <ul>
                    <Link className="Insumo" to={'/categoria/insumo'}>Insumos</Link>
                </ul>
                <ul>
                    <Link className="impresora" to={'/categoria/impresoras'}>Impresoras</Link>
                </ul>
                <ul>
                    <Link className="bandai" to={'/categoria/bandai'}>Figuras Bandai</Link>
                </ul>
                <CartWidget />
            </ul>
        </div>
    )
}
export default NavBar;