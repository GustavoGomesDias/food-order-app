import React, { useContext } from 'react';

import CartContext from '../../../store/cart-context';
import MealsItemForm from './MealsItemForm';
import classes from './MealsItem.module.css';

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$ ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.descrption}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealsItem;
