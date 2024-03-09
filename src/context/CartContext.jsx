import { createContext, useState } from "react"
export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        let existe = isInCart(item.id);

        if (existe) {
            let newArray = cart.map((elemento) => {

                if (elemento.id === item.id) {
                    return { ...elemento, cantidad: item.cantidad };
                } else {
                    return elemento;
                }
            })

            setCart(newArray)

        } else {
            setCart([...cart, item]);
        }
    }
    const clearCart = () => {
        setCart([]);
    }
    const isInCart = (id) => {
        return cart.some((elemento) => elemento.id === id);
    }
    const removeById = (id) => {
        let newArray = cart.filter((elemento) => elemento.id !== id);
        setCart(newArray);

    }
    const getTotalItems = () => {
        let total = cart.reduce((acc, elemento) => {
            return acc + elemento.cantidad
        }, 0);
        return total;
    }
    const getTotalPrice = () => {

        let total = cart.reduce((acc, elemento) => {
            return acc + (elemento.cantidad * elemento.price);
        }, 0);
        return total;
    }
    const getTotalQuantityById = (id) => {
        let product = cart.find((elemento) => elemento.id === id)
        if (product) {
            return product.cantidad;

        } else {
            return product;
        }

    }
    let data = {
        cart,
        addToCart,
        clearCart,
        removeById,
        getTotalItems,
        getTotalPrice,
        getTotalQuantityById,

    }

    return <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>
}
