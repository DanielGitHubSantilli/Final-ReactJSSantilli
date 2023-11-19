import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";

const CartItem = (props) => {
    const { id, name, price, quantity, img } = props;
    const { removeItem } = useContext(CartContext);

    return (
        <div className="border p-4 mb-4 rounded-lg shadow-lg bg-white text-verde-agua">
            <div className="flex">
                <picture className="mr-4">
                    <img src={img} alt={name} className="w-20 h-20" />
                </picture>
                <div>
                    <h2 className="text-lg font-semibold text-verde-agua">{name}</h2>
                    <p className="text-verde-agua">Cantidad: {quantity}</p>
                    <p className="text-verde-agua">Subtotal: ${quantity * price}</p>
                    <button
                        onClick={() => removeItem(id)}
                        className="bg-verde-agua text-white py-1 px-4 rounded-full focus:outline-none"
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;