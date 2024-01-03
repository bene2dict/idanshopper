// import React from "react";

// export const ToastErrorModal = ({ error }) => {
//   return (
//     <div className="bg-gray-50 z-50 fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen flex justify-center items-center">
//       <div
//         className="bg-primary text-white p-4 h-64 w-64 "
//         id="toast-container"
//         style={
//           {
//             // zIndex: 999,
//             // position: "fixed",
//             // top: "50%",
//             // left: "50%",
//             // transform: " translate(-50%, -50%)",
//           }
//         }
//       >
//         {error}
//       </div>
//     </div>
//   );
// };

"use client";

import { CustomToast } from "@/components/Searchbar";
import React, { createContext, useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastContext = createContext();

const ToastProvider = ({ children }) => {
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
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
