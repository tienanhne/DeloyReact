import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

const CartProvide = ({ children }) => {
  const [cart, setCart] = useState([])
  const [itemAmount, setItemAmount] = useState(0)
  const [total, setTotal] = useState(0)


  useEffect(() => {
    if(cart){
      const totals = cart.reduce((acc, cur) => {
        return acc + cur.price * cur.amount
      },0);
      setTotal(totals)
    }
  },[cart])

  useEffect(() => {
    if(cart){
      const amont = cart.reduce((acc, cur) => {
        return acc + cur.amount
      }, 0);
      setItemAmount(amont)
    }
  }, [cart])


  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const CartItem = cart.find(item => {
      return item.id === id
    })
    if (CartItem) {
      const NewCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 }
        } else {
          return item;
        }
      })
      setCart(NewCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  const removeCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    });
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([]);
  }


  const increaseAmount = (id) => {
    const Cartitem = cart.find(item => item.id === id)
    addToCart(Cartitem, id)
  }
  const decreseAmount = (id) => {
    const cartItem = cart.find(item => { return item.id === id })
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeCart(id)
    }
  }
  console.log(cart);
  return <CartContext.Provider value={{
    cart, addToCart, removeCart, clearCart,
    decreseAmount, increaseAmount, itemAmount,total
  }}>{children}</CartContext.Provider>;
};

export default CartProvide;
