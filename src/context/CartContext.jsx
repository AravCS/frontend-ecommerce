import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add one item
    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    // Remove one instance of item by id
    const removeFromCart = (id) => {
        setCart((prev) => {
            const index = prev.findIndex((i) => i.id === id);
            if (index === -1) return prev;
            const newCart = [...prev];
            newCart.splice(index, 1);
            return newCart;
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;