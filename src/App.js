import React, { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
  const  [cartIsShown, setCartIsShwon] = useState(false);

  const showCartHandle = () => {
    setCartIsShwon(true);
  };

  const hideCartHandle = () => {
    setCartIsShwon(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
