import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../Config/firebase"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
    if (db) {
      const collectionRef = collection(db, "products");
      const q = categoriaId
        ? query(collectionRef, where("categoria", "==", categoriaId))
        : collectionRef;
      getDocs(q)
        .then((response) => {
          const docsFromFirebase = response.docs;
          setProducts(
            docsFromFirebase?.map((doc) => {
              return { ...doc.data(), id: doc.id };
            })
          );
        })
        .catch((e) => {
          console.error("Error fetching data: ", e);
        });
    }
  }, [categoriaId]);

  return (
    <div className="bg-green-100 text-green-900 py-6 px-4">
      <h1 className="text-2xl font-semibold mb-4">{greeting}</h1>
      <section>
        <ItemList products={products} />
      </section>
    </div>
  );
};

export default ItemListContainer;