import './item.css'
import { Link } from "react-router-dom";

const Item = ({ data }) => {
    return (
        <div className="total-contain">
            <p className="titulo">{data.titulo}</p>
            <img src={data.imagen} alt={data.imagen} className="img"></img>
            <p className="precio">Precio p/unidad ${data.precio}</p>
            <div className="infoaCarrito">
                <Link to={`/item/${data.id}`} className="">AÑADIR</Link>
            </div>
            <h2 className="descrip">{data.descripcion}</h2>
            <h4 className="">{data.detalle}</h4>
            <hr></hr>
            <p className="stock">Stock:{data.stock}</p>
            <hr>
            </hr>
        </div>
    )
};
export default Item;