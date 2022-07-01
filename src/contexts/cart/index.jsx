import { createContext, useContext, useState } from 'react';

import Proptypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = product => {
    const existProductInCart = cart.find(item => item.id === product.id);

    if (!existProductInCart) setCart(prevState => [...prevState, product]);
    else
      setCart(prevState =>
        prevState.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + product.quantity,
              }
            : item,
        ),
      );
  };

  const removeProduct = productId => {
    setCart(prevState => prevState.filter(item => item.id !== productId));
  };

  const resetCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, resetCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: Proptypes.element.isRequired,
};

export const useCart = () => useContext(CartContext);
