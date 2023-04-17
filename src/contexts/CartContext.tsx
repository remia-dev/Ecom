import React, { createContext, useState, useEffect } from "react";

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext();

const CartProvider = ({ children }: CartContextProviderProps) => {
  type cartProps = {
    value: number;
  };
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (id: number, product: any) => {
    const newItem = { ...product, amount: 1 };
    // Check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item["id"] === id;
    });

    if (cartItem) {
      const newCart: any = [...cart].map((item) => {
        if (item["id"] === id) {
          return { ...item, amount: cartItem["amount"] + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id:any) => {
    const newCart = cart.filter(item => {
      return item['id'] !==id;
    })
    setCart(newCart);
  }

  // clear cart
  const clearCart = () => {
    setCart([]);
  }

  // increase amount 
  function increaseAmount (id:any) {
    const item:any = cart.find(item => item['id'] === id);
    addToCart(item,id)
  }

  function decreaseAmount(id:any){
    const item = cart.find(item => {
      return item['id'] === id;
    })
    console.log(item)

  }





  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
