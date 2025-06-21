import { GlobalContext } from "@/context/GlobalContext";
import { useContext, useEffect } from "react";

const Tabs = () => {
  return (
    <>
      <div className="top-tab bg-slate-100 w-9/12 md:w-1/3 p-1 mx-auto flex flex-row justify-center items-center rounded-3xl text-center font-bold relative">
        <span
          className={`text-white
        p-2 w-1/2 cursor-pointer z-10 relative`}
        >
          Jumia
        </span>

        <span
          className={`absolute top-0 left-0 w-full h-full bg-primary rounded-3xl transition-all duration-500 ease-in-out `}
        ></span>
      </div>
    </>
  );
};

export default Tabs;
