import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link
      href="/products/4"
      // href={`/products/${product._id}`}
      className="product-card"
    >
      <div className="product-card_img-container">
        <div className="product-card_img-container_inner">
          <Image
            src="/assets/images/hero-3.svg"
            // alt={product.title}
            width={200}
            height={200}
            className="product-card_img"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h3 className="product-title">
          {/* {product.title} */}
          Apple Watch
        </h3>

        <div className="flex justify-between">
          <p className="text-black opacity-50 text-lg capitalize">
            {/* {product.category} */}
            Category
          </p>

          <p className="text-black text-lg font-semibold">
            <span>{/* {product?.currency}  */}$</span>
            <span>
              {/* {product?.currentPrice} */}
              500
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
