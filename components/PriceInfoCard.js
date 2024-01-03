import { GlobalContext } from "@/context/GlobalContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const PriceInfoCard = ({ title, value, index }) => {
  const [discount, setDiscount] = useState(null);
  const iconSrc = false;
  // const title = false;

  const { calculateDiscount } = useContext(GlobalContext);

  useEffect(() => {
    const res = calculateDiscount(5000, 8000);
    setDiscount(res);
  }, []);

  console.log(discount);

  console.log(index);
  return (
    <div
      className={`price-info_card flex-1 flex flex-col gap-2 border-l-[3px] rounded-10 bg-white-100 px-5 py-4`}
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

      <div className="flex gap-1 items-center">
        <Image
          src={iconSrc || "/assets/images/hero-1.svg"}
          alt={title || "title"}
          width={50}
          height={50}
        />

        <p className="text-2xl font-bold text-secondary">{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
