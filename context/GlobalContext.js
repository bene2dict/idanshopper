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

  const handleTabs = (tabName) => {
    setActiveTabs(tabName);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  function calculateDiscount(currentPrice, slashedPrice) {
    const discountAmount = slashedPrice - currentPrice;
    const discountPercentage = (discountAmount / slashedPrice) * 100;
    return discountPercentage;
  }

  const value = {
    isLoading,
    isOpen,
    error,
    product,
    activeTabs,
    setActiveTabs,
    handleTabs,
    setProduct,
    setError,
    setIsOpen,
    setIsLoading,
    openModal,
    calculateDiscount,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
