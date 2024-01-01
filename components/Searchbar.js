"use client";

import { useContext, useState } from "react";

import isValidUrl from "@/lib/actions/localActions/isValidUrl";
import { GlobalContext } from "@/context/GlobalContext";
import ErrorModal from "./ErrorModal";

const Searchbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");

  const { openModal, error, setError } = useContext(GlobalContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("loading", isLoading);
    const response = await fetch(`/api/validate-url/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: searchPrompt }),
    });

    const data = await response.json();
    // console.log(response);

    console.log(data);
  };

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

      <ErrorModal />
    </>
  );
};

export default Searchbar;
