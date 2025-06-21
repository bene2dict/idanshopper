"use client";

// import { CustomToast } from "@/components/Searchbar";
import React, { createContext, useState } from "react";

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [activeTabs, setActiveTabs] = useState("jumia");
  const [store, setStore] = useState("jumia");
  const [email, setEmail] = useState("");

  


  function calculateDiscount(currentPrice, slashedPrice) {
    if (slashedPrice === undefined) {
      return false;
    }

    if (currentPrice === slashedPrice) {
      return false;
    }

    if (currentPrice < slashedPrice) {
      return false;
    }

    const newPrice = parseInt(currentPrice);
    const oldPrice = parseInt(slashedPrice && slashedPrice);

    const discountAmount = oldPrice - newPrice;
    const discountPercentage = (discountAmount / oldPrice) * 100;
    const discount = Math.floor(discountPercentage);
    return discount;
  }

  const value = {
    isLoading,
    error,
    product,
    store,
    activeTabs,
    email,
    setActiveTabs,
    setProduct,
    setError,
    setIsLoading,
    setStore,
    setEmail,
    calculateDiscount,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
