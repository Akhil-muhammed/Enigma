import React, { createContext, useState } from "react";
import PRODUCTS from "./Data";
import { useEffect } from "react";

export const Shopcontext = createContext(null);
const getLocalCartData = () => {
  const newCartData = localStorage.getItem("cartitems");
  return newCartData ? JSON.parse(newCartData) : {};
};
const getdefaultcart = () => {
  let cart = getLocalCartData;
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = cart[i];
  }
  return cart;
};
export const Shopcontextprovider = (props) => {
  const [cartitems, setCartitems] = useState(getdefaultcart());
  const gettottalcarteamount = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminform = PRODUCTS.find(
          (product) => product.id === Number(item)
        );
        totalamount += cartitems[item] * iteminform.price;
      }
    }
    return totalamount;
  };
  const addToCart = (itemid) => {
    setCartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };
  const deletecart = (itemid) => {
    setCartitems((prev) => ({
      ...prev,
      [itemid]: prev[itemid] - prev[itemid],
    }));
  };
  const removeFromCart = (itemid) => {
    setCartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);
  const contextValue = {
    cartitems,
    addToCart,
    removeFromCart,
    gettottalcarteamount,
    deletecart,
  };

  return (
    <Shopcontext.Provider value={contextValue}>
      {props.children}
    </Shopcontext.Provider>
  );
};
