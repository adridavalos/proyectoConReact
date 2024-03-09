import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import { Cart } from "./Cart"
import { FiShoppingBag } from 'react-icons/fi';


export const CartContainer = () => {
    const { cart, clearCart } = useContext(CartContext)


    return (
        <>
            {cart.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '50px', color: 'gray' }}>
                    <FiShoppingBag size={100} />
                    <h1>Carrito Vacío</h1>
                </div>
            ) : (
                <Cart cart={cart} clearCart={clearCart} />
            )}

        </>
    )
}