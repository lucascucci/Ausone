import { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./itemListContainer.css";

const ItemListContainer = () => {
  const { categoriaId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "items");
    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("categoria", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(res.docs.map((data) => ({ id: data.id, ...data.data() })))
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(res.docs.map((data) => ({ id: data.id, ...data.data() })))
      );
    }
  }, [categoriaId]);
  return (
    <div className="card">
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
