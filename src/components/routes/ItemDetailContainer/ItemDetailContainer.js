import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "items", id);
    //items corresponde a firebase la coleccion de elementos

    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [id]);
  return (
    <>
      <div>
        <ItemDetail data={data} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
