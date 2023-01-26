import React from "react";
import { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [shop, setShop] = useState([]);

  const agregarProducto = (item, cantidad) => {
    if (estaEnCarrito(item.id)) {
      setShop(
        shop.map((data) => {
          return data.id === item.id
            ? { ...data, cantidad: data.cantidad + cantidad }
            : data;
        })
      );
    } else {
      setShop([...shop, { ...item, cantidad }]);
    }
  };
  const cantidadIndivual = () => {
    return shop.reduce((acc, data) => (acc += data.cantidad), 0);
  };

  const eliminarIndividual = (id) =>
    setShop(
      shop.map((data) =>
        data.id === id ? { ...data, cantidad: data.cantidad - 1 } : data
      )
    );

  const estaEnCarrito = (id) =>
    shop.find((data) => data.id === id) ? true : false;

  const vaciarCarrito = () => setShop([]);

  const sacarProductos = (id) => setShop(shop.filter((data) => data.id !== id));

  const precioTotal = () => {
    return shop.reduce((acc, data) => acc + data.precio * data.cantidad, 0);
  };

  return (
    <CartContext.Provider
      value={{
        agregarProducto,
        estaEnCarrito,
        sacarProductos,
        vaciarCarrito,
        precioTotal,
        cantidadIndivual,
        eliminarIndividual,
        shop,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
