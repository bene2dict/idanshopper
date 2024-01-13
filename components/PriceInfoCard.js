"use client";

import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const PriceInfoCard = ({ title, value, index, image }) => {
  const [discount, setDiscount] = useState(null);
  const iconSrc = false;
  // const title = false;

  const { calculateDiscount } = useContext(GlobalContext);

  useEffect(() => {
    const res = calculateDiscount(5000, 8000);
    setDiscount(res);
  }, []);

  // console.log(discount);

  console.log(value);
  return (
    <div
      className={`price-info_card ${index !== 2 && "w-full"} ${
        index === 2 && "w-auto"
      } flex flex-col gap-2 border-l-[3px] rounded-10 bg-white-100 px-5 py-4`}
    >
      <p
        className={`text-sm font-semibold ${
          index === 0
            ? "text-primary"
            : index === 2
            ? "text-primary-orange"
            : "text-black-100"
        } `}
      >
        {title}
      </p>

      <div className="flex gap-2 items-center">
        {image}

        <p
          className={`${
            !value ? "text-lg" : "text-2xl  md:text-md lg:text-2xl"
          }  font-bold text-secondary`}
        >
          {value || "Not available"}
        </p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
