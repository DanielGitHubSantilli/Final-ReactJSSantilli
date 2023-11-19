import { useContext } from "react";
import { CartContext } from '../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="text-center p-4">
                <h1 className="text-2xl font-semibold text-verde-agua">Upss, no hay artículos en el Carrito</h1>
                <Link to='/' className="text-verde-agua underline hover:text-verde-agua-dark mt-2 inline-block">
                    Volver a la tienda
                </Link>
            </div>
        );
    }

    return (
        <div className="p-4">
            {cart.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    imagen={item.imagen}
                    quantity={item.quantity}
                    precio={item.precio}
                    removeItem={clearCart}
                    categoria={item.categoria}
                />
            ))}
            <h3 className="text-xl font-semibold text-verde-agua mt-4">Total: ${!isNaN(total) ? total : 0}</h3>
            <div className="mt-4">
                <button
                    onClick={() => clearCart()}
                    className="bg-verde-agua text-white px-4 py-2 rounded-lg mr-2"
                >
                    Vaciar Carrito
                </button>
                <Link to='/' className="text-verde-agua underline hover:text-verde-agua-dark">
                    Seguir comprando
                </Link>
                <Link to='/checkout' className="ml-4 bg-verde-agua text-white px-4 py-2 rounded-lg">
                    Finalizar compra
                </Link>
            </div>
        </div>
    );
}

export default Cart;