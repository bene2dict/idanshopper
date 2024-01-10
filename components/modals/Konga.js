import React, { useContext, useEffect } from "react";
import PriceInfoCard from "../PriceInfoCard";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";

const Konga = ({ product }) => {
  const { activeTabs } = useContext(GlobalContext);

  useEffect(() => {
    console.log(activeTabs);
  }, [activeTabs]);

  const {
    picture,
    title,
    productCode,
    brandName,
    priceSymbol,
    price,
    oldPrice,
    merchantName,
    merchantNumber,
    linkType,
  } = product[0];

  return (
    <article className={`konga-product my-3 slide-in-right`}>
      <div className="searched-container flex flex-col lg:flex-row gap-3">
        <div className="product-image flex-grow lg:max-w-[50%] max-w-full py-16 border border-[#CDDBFF] rounded-[17px]">
          <Image
            src={"/assets/images/hero-1.svg"}
            alt={"title"}
            width={580}
            height={400}
            className="mx-auto"
          />
        </div>

        <div className="description-container lg:max-w-[50%] flex flex-col gap-5 m-0">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">{title}</h1>

            <span className="text-md font-normal text-primary-green">
              {brandName} | Gotten from Konga
            </span>

            <div className="price-amount text-3xl font-semibold flex flex-row justify-between items-center border-t-2 border-b-2 py-6">
              <div className="price flex flex-col ">
                <h3 className="text-sm text-primary">PRICE</h3>
                <span className="flex flex-row">
                  <p className=" m-0">{priceSymbol} </p>
                  <p>{price}</p>
                </span>

                <p className="text-[16px] opacity-50 line-through">
                  {priceSymbol + " " + oldPrice}
                </p>
              </div>

              <div className="seller-name flex flex-col justify-end text-left  -ml-20 font-normal">
                <p className="text-sm text-primary-orange font-medium m-0">
                  {" "}
                  Seller Name
                </p>
                <p className="text-xl text-gray-900 font-medium m-0">
                  Onyx Shop Ltd
                </p>
              </div>
            </div>
          </div>

          <div className="description">
            <h1 className="text-2xl font-semibold">Website Tips</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              sit. Mollitia, libero temporibus assumenda nostrum error minus
              architecto magni voluptas odit voluptatem. Vitae consequuntur nam
              neque non at commodi repellat dolore necessitatibus, a accusantium
              magnam tempora, laborum maiores facere? Est.
            </span>
          </div>

          <div className="price-change-container flex flex-col gap-5">
            <div className="flex gap-5 flex-wrap">
              {["Current price", "Old price", "Discount(%)"].map((x, index) => (
                <PriceInfoCard
                  key={index}
                  index={index}
                  iconSrc="/assets/icons/price-tag.svg"
                  value={500}
                  title={x}
                />
              ))}
            </div>
          </div>

          <div className="track-button">
            <button
              type="submit"
              className="searchbar-btn w-full bg-gray-900 border border-gray-900 rounded-lg shadow-xs px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
            >
              Track
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Konga;
