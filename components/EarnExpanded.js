// import React from 'react'

import Image from "next/image";
import Link from "next/link";
import { SiBitcoincash } from "react-icons/si";

const EarnExpanded = () => {
  return (
    <div className="history-expanded-container flex flex-col gap-5">
      <h1 className="text-primary text-2xl font-semibold">Earn With us</h1>

      <div className="earn-description-container bg-white p-12 shadow-sm flex flex-col  justify-center items-center gap-10 text-secondary">
        <div className="earn-description-main ">
          <h1 className="text-secondary text-center capitalize text-xl font-bold">
            Earn with Crypto when you products gets{" "}
            <span className="text-primary">liked</span> ,{" "}
            <span className="text-primary">viewed</span> or{" "}
            <span className="text-primary">bought</span>
          </h1>
        </div>
        <SiBitcoincash className="w-52 h-52 text-yellow-800" />
      </div>
    </div>
  );
};

export default EarnExpanded;
