import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../Config/firebase'
//'../../services/firebase/firebaseConfig';

function ItemDetailContainer () {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { itemId } = useParams();
    
    useEffect(() => {
        const docRef = doc(db, 'Comidas', itemId);

        setLoading(true); 
        getDoc(docRef)
            .then(response => {
                const data = response.data();
                const productAdapted = { id: response.id, ...data };
                setProduct(productAdapted);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false); 
            });
    }, [itemId]);

    return (
        <div className="p-4">
          {loading ? (
            <p className="text-verde-agua text-lg">Cargando...</p>
          ) : (
            <ItemDetail {...product} />
          )}
        </div>
      );
    };
    
    export default ItemDetailContainer;