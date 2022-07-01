import { createContext, useContext, useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { useAuth } from '../auth';

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();
  const nameToLocalStorage = `@framefruit: cart${user?.id}`;
  const [cart, setCart] = useState(() => {
    const shoppingCart = localStorage.getItem(nameToLocalStorage);

    if (shoppingCart) return JSON.parse(shoppingCart);
    return [];
  });

  useEffect(() => {
    if (cart.length === 0) localStorage.removeItem(nameToLocalStorage);
    else if (user) {
      localStorage.setItem(nameToLocalStorage, JSON.stringify(cart));
    }
  }, [cart, nameToLocalStorage, user]);

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
