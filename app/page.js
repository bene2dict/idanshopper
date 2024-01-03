import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
// import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";
import ErrorModal from "@/components/modals/ErrorModal";

const Home = async () => {
  // const allProducts = await getAllProducts();

  return (
    <>
      <section className="">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text flex gap-2 text-sm font-medium text-primary">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
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

      <section className="trending-section flex flex-col gap-10 ">
        <h2 className="section-text text-secondary text-[32px] font-semibold">
          Trending
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {/* {allProducts?.map((product) => ( */}
          <ProductCard
          // key={product._id}
          // product={product}
          />
          <ProductCard
          // key={product._id}
          // product={product}
          />
          <ProductCard
          // key={product._id}
          // product={product}
          />
          <ProductCard
          // key={product._id}
          // product={product}
          />
          <ProductCard
          // key={product._id}
          // product={product}
          />
          <ProductCard
          // key={product._id}
          // product={product}
          />
          <ProductCard
          // key={product._id}
          // product={product}
          />
          {/* ))} */}
        </div>

        <ErrorModal />
      </section>
    </>
  );
};

export default Home;
