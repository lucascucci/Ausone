import { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ cantidad, onAdd }) => {
  const [contador, setContador] = useState(1);

  const decrecimiento = () => {
    contador > 0 ? setContador(contador - 1) : setContador(0);
  };

  const agregarItem = () => {
    onAdd(contador);
  };

  const aumento = () => {
    setContador(contador + 1);
  };

  const modificarContador = () => {
    setContador(1);
  };
  return (
    <>
      <div>
        <div className="contenedorMayor">
          <h5>Seleccionar cantidad</h5>
          <button onClick={decrecimiento} className="botonMenos">
            -
          </button>
          <button onClick={aumento} className="botonMas">
            +
          </button>
          <span className="contadorProducto">Cantidad: {contador}</span>
        </div>
        <button className="boton1" onClick={modificarContador}>
          Borrar item añadidos
        </button>
        <button className="boton2" onClick={agregarItem}>
          {" "}
          Agregar al carro
        </button>
      </div>
    </>
  );
};
export default ItemCount;
