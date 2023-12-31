import BannerCarousel from "@/components/BannerCarousel";
import ProductCard from "@/components/ProductCard";
import React from "react";

const Products = () => {
  return (
    <section className="flex flex-col  ">
      <BannerCarousel />
      <section className="trending-section">
        <h2 className="section-text">Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16 ">
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
      </section>
      <div className="">products grid</div>
    </section>
  );
};

export default Products;
