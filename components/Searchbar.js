"use client";

import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "@/context/GlobalContext";
import sendUrlToScraper from "@/lib/actions/localActions/sendUrlToScraper";
import SearchedModal from "./modals/SearchedModal";
import checkLink from "@/lib/actions/localActions/checkLink";

// import { Toast } from "./modals/Toast";

const Searchbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");

  const {
    email,
    isOpen,
    openModal,
    error,
    product,
    store,
    setProduct,
    setError,
    setStore,
  } = useContext(GlobalContext);

  console.log(email);

  useEffect(() => {
    if (product) {
      openModal();
    }
  }, [product]);

  const handleRes = (res) => {
    console.log("Res gotten", res);
    // setStore("Link Type", res.linkType);
    // console.log("Store Searched", store);


    setProduct(res);
    // toast.success("We have a product for you");
    console.log("Response data", res);
  }

  const checkGottenProduct = (res) => {
    if(!res) {
      alert("Failed !!!")
    }

    
      const data = res
      setProduct(data);
      console.log("Opening Modal ");
      console.log(isOpen);
      openModal();
    
   
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const linkType = checkLink(searchPrompt);

    // console.log(linkType);
    setIsLoading(true)
    console.log("loading", isLoading);
    const response = await fetch(`/api/validate-url/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: searchPrompt }),
    });

    if (!response.ok) {
      console.log("failed toast");
      // toast.error("Failed to validate link, You have entered an invalid link");
    }

    const data_url = await response.json();
    console.log(data_url);

    // toast("Getting product data...");
    const res = await sendUrlToScraper(data_url.url, linkType.message);

    if (!res) {
      // return toast.error("Failed to get any product");
      console.log("Res has an issue");
    } 

    setIsLoading(false);

    handleRes(res);
      
      
    

    
    checkGottenProduct(res);
    
  };



  console.log(product && product);

  return (
    <>
      <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter product link"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          className="searchbar-input flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xs text-base text-gray-500 focus:outline-none"
        />

        <button
          type="submit"
          className="searchbar-btn bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
          disabled={searchPrompt === ""}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </form>

      {product ?  <SearchedModal product={product && product} /> : ""}
    </>
  );
};

export default Searchbar;
