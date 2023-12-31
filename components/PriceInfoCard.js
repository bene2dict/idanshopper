import Image from "next/image";

const PriceInfoCard = () => {
  const iconSrc = false;
  const title = false;
  return (
    <div
      className={`price-info_card flex-1 min-w-[200px] flex flex-col gap-2 border-l-[3px] rounded-10 bg-white-100 px-5 py-4`}
    >
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
