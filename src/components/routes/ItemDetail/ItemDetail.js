import { useState } from "react";
import { useCartContext } from "../../../context/CartContext";
import "./itemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ data }) {
    const [irAcarrito, setirAcarrito] = useState(false);
    const { agregarProducto } = useCartContext();
    const onAdd = (contador) => {
    setirAcarrito(true);
    agregarProducto(data, contador);
};
    return (
    <div className="detailCont">
        <div className="itemDetailCont">
            <h1 className="tituloDet">{data.titulo}</h1>
            <img className="imgA" src={data.imagen} alt={data.imagen}></img>
            <span className="data">{data.descripcion}</span>
            
            <span className="detail-price">Precio${data.precio}</span>
            <p className="stockDet">Stock:{data.stock}</p>
            <ItemCount data={data} onAdd={onAdd} cantidad={data.cantidad} />
        </div>
    </div>
    );
}

export default ItemDetail;