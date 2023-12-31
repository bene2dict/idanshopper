"use client";

import React, { createContext, useState } from "react";

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [focused, setFocused] = useState("earn");
  const [status, setStatus] = useState(false);

  const toggleMenu = (text) => {
    setFocused(text);
    console.log("clicked: ", text);
  };

  const value = { focused, status, setStatus, toggleMenu };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
