import Image from "next/image";

const PriceInfoCard = () => {
  const iconSrc = false;
  const title = false;
  return (
    <div className={`price-info_card`}>
      <p className="text-base text-black-100">
        Title
        {/* {title} */}
      </p>

      <div className="flex gap-1">
        <Image
          src={iconSrc || "/assets/images/hero-1.svg"}
          alt={title || "title"}
          width={24}
          height={24}
        />

        <p className="text-2xl font-bold text-secondary">
          500
          {/* {value} */}
        </p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
