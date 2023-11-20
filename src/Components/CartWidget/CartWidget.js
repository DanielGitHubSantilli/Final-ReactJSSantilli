import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";
import cart from "../../Assets/cart.svg"
//"   /assets/cart.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart'>
            <img
                src={cart}
                alt='cart-widget'
                className={`h-10 w-10 ${totalQuantity > 0 ? 'text-verde-agua' : 'text-gray-400'}`}
            />
        </Link>
    );
};

export default CartWidget;