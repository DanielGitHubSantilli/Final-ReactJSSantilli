import { useState, useContext } from "react"
import { CartContext } from 'context/CartContext'
import {getDocs, collection, query, where, documentId, writeBatch, addDoc, Timestamp} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import CheckoutForm from '../CheckoutForm/CheckoutForm'
import './Checkout.css' 

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState ('')

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                item: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)

            const productsRef = collection(db, 'products')

            console.log('Obteniendo datos de productos para carrito:', ids);

            const productsAddedFromFirestore = await getDocs (query(productsRef, where(documentId(), 'in', ids)))
      
            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;
            
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
            
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc ( orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Hay productos que están fuera de stock")
            }
        } catch(error) {
            console.log(error)

        } finally {
            setLoading(false)
        }

    } 

    if(loading) {
        return (
        <div className="cartcontainer">
            <h1 className="message">Se esta generando su orden...</h1>
        </div>
        )
}
    if (orderId) {
        return (
        <div className="cartcontainer">
            <h1 className="message">El id de su orden es: {orderId}</h1>
            <h2 className="message2">Muchas gracias por su compra!</h2>
        </div>
        )
        
    }

    return (
        <div className='cartcontainer'>
            <h1 className="CheckTitle">Checkout</h1>
            <CheckoutForm onConfirm = {createOrder} />
        </div>
    )
}


export default Checkout;