import React from 'react';

import classes from './MealsItem.module.css';

const MealsItem = (props) => {
  const price = `$ ${props.price.toFixed(2)}`;

  return (
    <li className={classes.mel}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.descrption}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>

      </div>
    </li>
  );
}

export default MealsItem;
