import Carro from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./cartwidget.css";
const CartWidget = () => {
const { cantidadIndivual } = useCartContext();

  return (
    <div className="CartWidget">
      <Link to="/shopping">
        <img src={Carro} alt={Carro} className="imagenCarro" />
        <p>{parseInt(cantidadIndivual())}</p>
      </Link>
    </div>
  );
};

export default CartWidget;