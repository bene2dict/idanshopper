"use client";

import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/GlobalContext";
import sendUrlToScraper from "@/helper/sendUrlToScraper";
import checkLink from "@/helper/checkLink";
import SearchedModal from "./modals/SearchedModal";
import { toast } from "react-toastify";

const Searchbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [product, setProduct] = useState(null);
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const { email, openModal,  setError, setStore } =
  //   useContext(GlobalContext);

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = searchPrompt;
    const platformInfo = checkLink(url);

    setIsLoading(true);
    console.log("🕒 Loading started...");

    try {
      const isValid = await validateUrl(url);
      if (!isValid) return;

      const productData = await sendUrlToScraper(url);

      if (!productData) return;

      console.log("product data", productData);

      setProduct(productData);
      setIsOpen(true);
      console.log("Product data loaded:", productData);
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };


  const validateUrl = async (url) => {
    try {
      const response = await fetch("/api/validate-url/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        toast.error("Invalid link. Please check and try again.");
        return false;
      }

      const data = await response.json();
      toast.success("✅ URL validated successfully!");
      return data;
    } catch (error) {
      toast.error("Failed to validate URL.");
      console.error("Validation error:", error);
      return false;
    }
  };

     


  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-4 mt-12">
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter product link"
          className="searchbar-input flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"
        />

        <button
          type="submit"
          disabled={!searchPrompt}
          className="searchbar-btn bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:opacity-40"
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>
   {product && <SearchedModal isOpen={isOpen} setIsOpen={setIsOpen} product={product} /> }
    </>
  );
};

export default Searchbar;

// This code defines a Searchbar component that allows users to input a product link, validates it, and retrieves product data from a scraper. It uses React hooks for state management and context for global state. The component also handles loading states and error messages using the react-toastify library for user feedback.
