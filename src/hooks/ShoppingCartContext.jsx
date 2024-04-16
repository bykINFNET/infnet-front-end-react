import { createContext, useContext, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";
import useLocalStorage from "./useLocalStorage";

const ShoppingCartContext = createContext({});

const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id) => {

    return cartItems.find((item) => item.id === id)?.quantity || 0;
  
  };

  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      
      // console.log(currItems)
      
      if (currItems.find((item) => item.id === id) == null) {
      
        return [...currItems, { id, quantity: 1 }];
      
      } else {
      
        return currItems.map((item) => {
      
          if (item.id === id) {
      
            return { ...item, quantity: item.quantity + 1 };
      
          } else {
      
            return item;
      
          }
      
        });
      
      }
    
    });
  
  };

  const deacreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quanity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quanity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        deacreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      <ShoppingCart />
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, useShoppingCart, ShoppingCartProvider };
