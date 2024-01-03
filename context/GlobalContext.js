"use client";

import { CustomToast } from "@/components/Searchbar";
import React, { createContext, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const value = {
    isLoading,
    isOpen,
    error,
    product,
    setProduct,
    setError,
    setIsOpen,
    setIsLoading,
    openModal,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
