import { useCartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import cart from "./cart.css";

const Cart = () => {
  const {
    sacarProductos,
    eliminarIndividual,
    vaciarCarrito,
    precioTotal,
    shop,
  } = useCartContext();
  return (
    <>
      <div className="carro">
        {shop.length === 0 ? (
          <div className="">
            <span>Carrito vacio</span>
          </div>
        ) : (
          <div className="cartMap">
            {shop.map((data, indice) => (
              <div className="contenido-Card" key={indice}>
                <div className="containCard">
                  <div className="contenidoCard">
                    <h1 className="titulo">{data.titulo}</h1>
                    <img src={data.imagen} alt={data.id} className=""></img>
                    <p className="info">
                      Esta compra corresponde a: {data.descripcion}
                    </p>
                    <span className="precio">Precio $ {data.precio}</span>
                    <p className="canti">Cantidad : {data.cantidad}</p>
                    <div>
                      <button
                        className="eliminarUni"
                        disabled={data.cantidad <= 0 && sacarProductos(data.id)}
                        onClick={() => eliminarIndividual(data.id)}
                      >
                        Eliminar por unidad{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div>
              <div>
                <button className="vaciarCarrito" onClick={vaciarCarrito}>
                  Vaciar Carro
                </button>
              </div>
              <span className="precioTotal">
                Total compra $: {precioTotal()}{" "}
              </span>
            </div>
            <div>
              <Link to="/checkout">
                <button className="continuar-compra">Continuar compra</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
