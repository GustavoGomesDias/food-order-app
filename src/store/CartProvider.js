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
		<CartContext.Provider>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartProvider
