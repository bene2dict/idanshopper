import React, { useContext, useEffect, useState } from "react";
import PriceInfoCard from "../PriceInfoCard";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";

import { LuBadgePercent } from "react-icons/lu";
import { IoMdPricetags } from "react-icons/io";
import { GiPriceTag } from "react-icons/gi";

const Konga = ({ product }) => {
  const { activeTabs, calculateDiscount } = useContext(GlobalContext);
  const [priceChangePercent, setPriceChangePercent] = useState(null);

  useEffect(() => {
    console.log(activeTabs);
    setPriceChangePercent(calculateDiscount(price, oldPrice));
  }, [priceChangePercent]);

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
    url,
    linkType,
  } = product[0];

  return (
    <article className={`jumia-product slide-in-left my-3  `}>
      <div className="searched-container flex flex-col lg:flex-row gap-3">
        <div className="product-image flex-grow flex justify-center items-center lg:max-w-[50%] max-w-full py-16 border border-[#CDDBFF] rounded-[17px]">
          <Image
            src={picture}
            alt={"title"}
            width={580}
            height={400}
            className="mx-auto"
          />
        </div>

        <div className="description-container lg:max-w-[50%] flex flex-col gap-5 m-0">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl lg:text-4xl font-semibold">{title}</h1>

            <span className="text-md font-normal text-primary-green">
              {brandName} |
              <Link href={url} target="_blank" className="text-primary ml-1">
                Buy product from Jumia
              </Link>
            </span>

            <div className="price-amount text-3xl font-semibold flex flex-col-reverse md:flex-row gap-5 md:gap-0 justify-between items-center border-t-2 border-b-2 py-6">
              <div className="price flex flex-row gap-10 md:gap-0  md:flex-col -ml-[3rem] md:ml-0">
                <div className="price-title-price">
                  <h3 className="text-sm text-primary">PRICE</h3>
                  <span className="flex flex-row">
                    <p className="price-symbol"> {priceSymbol} </p>
                    <p>{price}</p>
                  </span>
                </div>

                <p className="flex text-[16px] opacity-50 line-through items-end">
                  {oldPrice && priceSymbol + "" + oldPrice}
                </p>
              </div>

              <div className="seller-name flex flex-col justify-end text-left  -ml-[10rem]   lg:-ml-20 font-normal">
                <p className="text-sm text-primary-orange font-medium m-0">
                  Seller Name
                </p>
                <p className="text-lg text-gray-700 font-medium m-0">
                  {merchantName}
                </p>
                <span className="text-sm text-gray-600">{merchantNumber}</span>
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
            <div className=" grid grid-cols-1 md:grid-cols-2  gap-5">
              <PriceInfoCard
                value={price}
                title="Current Price"
                index={0}
                image={<IoMdPricetags className="w-7 h-7" />}
              />
              {oldPrice && (
                <PriceInfoCard
                  value={oldPrice}
                  title="Old Price"
                  index={1}
                  image={<GiPriceTag className="w-7 h-7" />}
                />
              )}
              {priceChangePercent && (
                <PriceInfoCard
                  value={priceChangePercent + "%"}
                  title="Price change"
                  index={2}
                  image={<LuBadgePercent className="w-7 h-7" />}
                />
              )}
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
