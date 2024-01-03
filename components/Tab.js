import { GlobalContext } from "@/context/GlobalContext";
import { useContext } from "react";

const Tabs = () => {
  const { error, activeTabs, handleTabs } = useContext(GlobalContext);

  console.log("active tab", activeTabs);

  return (
    <div className="top-tab bg-slate-100 w-1/3 p-1 mx-auto flex flex-row justify-center items-center rounded-3xl text-center font-bold relative">
      <span
        className={`${
          activeTabs === "jumia" ? "text-white" : "text-gray-700"
        } p-2 w-1/2 cursor-pointer z-10 relative`}
        onClick={() => handleTabs("jumia")}
      >
        Jumia
      </span>
      <span
        className={`${
          activeTabs === "konga" ? "text-white" : "text-gray-700"
        } w-1/2 p-2 cursor-pointer z-10 relative`}
        onClick={() => handleTabs("konga")}
      >
        Konga
      </span>
      <span
        className={`absolute top-0 left-0 w-1/2 h-full bg-primary rounded-3xl transition-all duration-500 ease-in-out ${
          activeTabs === "jumia" ? "translate-x-0" : "translate-x-full"
        }`}
      ></span>
    </div>
  );
};

export default Tabs;
