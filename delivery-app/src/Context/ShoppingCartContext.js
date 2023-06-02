import React, { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [shoppingCart, setShoppingCart] = useState([]);
	const [itemQuantity, setItemQuantity] = useState('');

	return (
		<ShoppingCartContext.Provider value={{ shoppingCart, setShoppingCart, itemQuantity, setItemQuantity }}>
			{children}
		</ShoppingCartContext.Provider>
	);
};
