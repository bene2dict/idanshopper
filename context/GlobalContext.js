"use client";

// import { CustomToast } from "@/components/Searchbar";
import React, { createContext, useState } from "react";

// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);
  const [activeTabs, setActiveTabs] = useState("jumia");
  const [store, setStore] = useState("jumia");

  const handleTabs = (tabName) => {
    setActiveTabs(tabName);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  function calculateDiscount(currentPrice, slashedPrice) {
    if (slashedPrice === undefined) {
      console.log("undefined slashed Price");
      return false;
    }

    if (currentPrice === slashedPrice) {
      console.log("No Price change");
      return false;
    }

    if (currentPrice < slashedPrice) {
      console.log("Price has been increased");
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
    isOpen,
    error,
    product,
    store,
    activeTabs,
    setActiveTabs,
    handleTabs,
    setProduct,
    setError,
    setIsOpen,
    setIsLoading,
    setStore,
    openModal,
    calculateDiscount,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
