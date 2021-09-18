import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const  [cartIsShown, setCartIsShwon] = useState(false);

  const showCartHandle = () => {
    setCartIsShwon(true);
  };

  const hideCartHandle = () => {
    setCartIsShwon(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandle} />}
      <Header onShowCart={showCartHandle} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
