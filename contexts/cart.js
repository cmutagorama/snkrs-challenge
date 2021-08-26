import { useState, createContext } from "react";

const CartContext = createContext(0);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	const addToCart = (item) => (setCart([...cart, item]));
	

	return (
		<CartContext.Provider value={[cart, addToCart]}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext