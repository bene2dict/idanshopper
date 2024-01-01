"use client";

import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const value = {
    isLoading,
    isOpen,
    error,
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
