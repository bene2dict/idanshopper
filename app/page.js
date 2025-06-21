import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";

import ProductCard from "@/components/ProductCard";

import right_arrow from "@/public/assets/icons/arrow-right.svg"

const Home = async () => {

  return (
    <>
      <section className="">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text flex gap-2 text-sm font-medium text-primary">
              Smart Shopping Starts Here:
              <Image
                src={right_arrow}
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>

            <h1 className="head-text mt-4 text-6xl leading-[72px] font-bold tracking-[-1.2px] text-gray-900">
              Unleash the Power of
              <span className="text-primary"> PriceWise</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more.
            </p>

            <Searchbar />
          </div>

          <HeroCarousel />
        </div>
      </section>

      

    </>
  );
};

export default Home;
