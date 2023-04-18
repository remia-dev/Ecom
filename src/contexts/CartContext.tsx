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
  // item amount
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem["price"] * currentItem["amount"];
    }, 0);
    setTotal(total);
  });

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem['amount'];
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  // add to cart
  const addToCart = (id: number, product: any) => {
    const newItem = { ...product, amount: 1 };
    // Check if the item is already in the cart
    const cartItem = cart.find((item) => {
      return item["id"] === id;
    });
    if (cartItem) {
      const newCart:any[] = [...cart].map((item) => {
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

  // total price state
  const removeFromCart = (id: any) => {
    const newCart = cart.filter((item) => {
      return item["id"] !== id;
    });
    setCart(newCart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // increase amount
  const increaseAmount = (id: any) => {
    const cartItem: any = cart.find((item) => item['id'] === id);
    addToCart(id, cartItem);
  };

  const decreaseAmount = (id: any) => {
    const cartItem: any = cart.find((item) => {
      return item["id"] === id;
    });
    if (cartItem) {
      const newCart: any = cart.map((item) => {
        if (item["id"] === id) {
          return { ...item, amount: cartItem["amount"] - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem["amount"] < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
