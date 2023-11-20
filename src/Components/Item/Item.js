import { Link } from "react-router-dom";

function Item({ id, nombre, imagen, precio, stock, categoria }) {
  return (
    <article className="border border-verde-agua shadow-md rounded-lg p-4 text-center">
      <header className="mb-2">
        <h2 className="text-xl text-verde-agua font-semibold">{nombre}</h2>
      </header>
      <picture className="mb-2">
        <img src={imagen} alt={nombre} className="w-full h-auto mx-auto" />
        {/* Agregar `mx-auto` para centrar horizontalmente */}
      </picture>
      <section className="mb-2">
        <p className="text-verde-agua font-semibold">
          Precio: ${precio}
        </p>
        <p className="text-verde-agua">
          Stock disponible: {stock}
        </p>
        <p className="text-verde-agua">
          Categoría: {categoria}
        </p>
      </section>
      <footer>
        <Link
          to={`/item/${id}`}
          className="bg-verde-agua text-white py-2 px-4 rounded-md hover:bg-dark-verde-agua focus:ring focus:ring-verde-agua focus:outline-none"
        >
          Ver detalle
        </Link>
      </footer>
    </article>
  );
}

export default Item;