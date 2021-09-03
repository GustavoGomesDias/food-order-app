import React from 'react';

import MealsItemForm from './MealsItemForm';
import classes from './MealsItem.module.css';

const MealsItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.descrption}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm id={props.id} />
      </div>
    </li>
  );
}

export default MealsItem;
