import itemlist from "./itemlist.css";
import Item from "../Item/Item";

const ItemList = ({ data }) => {
  return (
    <div className="data">
      {data.map((data) => (
        <Item data={data} key={data.id} />
      ))}
    </div>
  );
};
export default ItemList;
