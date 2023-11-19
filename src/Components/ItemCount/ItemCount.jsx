import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }

    return (
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <button
              className="bg-verde-agua text-white py-2 px-4 rounded-md hover:bg-dark-verde-agua focus:ring focus:ring-verde-agua focus:outline-none"
              onClick={increment}
            >
              +
            </button>
            <h4 className="text-2xl text-verde-agua font-semibold">{quantity}</h4>
            <button
              className="bg-verde-agua text-white py-2 px-4 rounded-md hover:bg-dark-verde-agua focus:ring focus:ring-verde-agua focus:outline-none"
              onClick={decrement}
            >
              -
            </button>
          </div>
          <div>
            <button
              className={`${
                stock > 0
                  ? "bg-verde-agua hover:bg-dark-verde-agua"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white py-2 px-4 rounded-md focus:ring focus:ring-verde-agua focus:outline-none`}
              onClick={() => onAdd(quantity)}
              disabled={!stock}
            >
              Agregar al Carrito
            </button>
          </div>
        </div>
      );
    };
    
    export default ItemCount;