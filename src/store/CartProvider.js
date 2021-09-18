import React from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {};

	const removeItemfromCartHandler = (id) => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemfromCartHandler
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartProvider
