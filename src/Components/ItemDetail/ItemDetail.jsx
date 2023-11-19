import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({
  id,
  nombre,
  imagen,
  categoria,
  precio,
  stock,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      nombre,
      precio,
      imagen,
      categoria
    };

    addItem(item, quantity);
  };

  return (
    <article className="bg-white p-4 rounded-lg shadow-md">
      <header className="mb-4">
        <h2 className="text-2xl text-verde-agua font-semibold">{nombre}</h2>
      </header>
      <picture>
        <img src={imagen} alt={nombre} className="rounded-md" />
      </picture>
      <section className="mt-4">
        <p className="text-verde-agua font-semibold">Categoria: {categoria}</p>
        <p className="text-verde-agua font-semibold">Precio: ${precio}</p>
      </section>
      <footer className="mt-4">
        <div className="flex justify-center">
          {quantityAdded > 0 ? (
            <Link
              to="/cart"
              className="bg-verde-agua text-white py-2 px-4 rounded-md hover:bg-dark-verde-agua focus:ring focus:ring-verde-agua focus:outline-none"
            >
              Terminar Compra
            </Link>
          ) : (
            <ItemCount
              stock={stock}
              initial={1}
              onAdd={(quantity) => handleOnAdd(quantity)}
            />
          )}
        </div>
      </footer>
    </article>
  );
};

export default ItemDetail;