import React from "react";
import shrimpImage from "../../assets/shirmp (4).png";
import shrimpImag1 from "../../assets/shirmp (1).png";
import shrimpImag2 from "../../assets/shirmp (2).png";
import shrimpImag3 from "../../assets/shirmp (3).png";

// Adjust the image path as needed
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { BsBookmark } from "react-icons/bs";
import DetailsTabs from "./DetailsTabs";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import ProductGrid from "../products/Products";

const ProductDetails = () => {
  const info = [
    { label: "SKU", value: "B2646716" },
    { label: "Brand", value: "Fisher’s Finest" },
    { label: "Tags", value: "Fish, Grocery, Shrimp" },
    { label: "Share", value: "Facebook, Twitter, Pinterest" },
  ];

  const { id } = useParams();
  const { products } = useProducts(); // context থেকে products নিলাম

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center mt-10">Product Not Found</h2>;
  }
  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image Section */}
          <div className="md:w-1/2">
            <img
              src={shrimpImage}
              alt="Fresh Peeled & Developed Shrimp"
              className="w-full h-auto rounded-lg object-cover shadow-md mb-4"
            />

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {[shrimpImag1, shrimpImag2, shrimpImag3].map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Shrimp ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:ring-2 hover:ring-green-500 transition"
                />
              ))}
            </div>
          </div>

          {/* Product Details Section */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg ">
            {/* Product Title and Rating */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating ? "fill-current" : "text-gray-300"
                      }`}
                      viewBox="0 0 24 24"
                      fill={i < product.rating ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                <span className="ml-2 text-gray-600">
                  {product.reviewCount} Reviews
                </span>
                {/* <span className="ml-4 text-green-600 font-medium">
                  In Stock
                </span> */}
                <span
                  className={`ml-4 font-medium ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="mb-6">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-800">
                  {product.price}
                </span>
                <span className="ml-2 text-lg text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                  {product.discountPercentage}% Off
                </span>
              </div>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            {/* Sale Timer */}
            <div className="flex items-center gap-2 text-sm font-medium">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                Sales Ends In
              </h3>
              <div className="flex space-x-4">
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-800">01</span>
                  <span className="block text-sm text-gray-500">DAYS</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-800">19</span>
                  <span className="block text-sm text-gray-500">HRS</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-800">36</span>
                  <span className="block text-sm text-gray-500">MIN</span>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-gray-800">54</span>
                  <span className="block text-sm text-gray-500">SEC</span>
                </div>
              </div>
            </div>

            {/* Weight Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Weight
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.weightOptions.map((weight) => (
                  <button
                    key={weight}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              {/* Quantity Selector */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">
                  QTY
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-200 rounded-3xl overflow-hidden">
                    <button className="px-4 py-2 text-gray-600  transition">
                      -
                    </button>
                    <span className="px-6 py-2 font-medium text-center bg-white">
                      01
                    </span>
                    <button className="px-4 py-2  text-gray-600 transition">
                      +
                    </button>
                  </div>
                  <button className="flex-1 px-6 py-3  text-[#46AE3D] border border-[#46AE3D] font-medium rounded-3xl  transition">
                    Add To Cart
                  </button>
                  <button>
                    <BsBookmark />
                  </button>
                </div>
              </div>

              {/* Buy Now Button */}
              <div className="mb-6">
                <button className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-3xl hover:bg-green-700 transition">
                  Buy Now
                </button>
                <p className="mt-2 text-sm text-gray-500 text-center bg-[#F5F7F5] py-[14px] rounded-xl">
                  {product.estimatedDelivery}
                </p>

                <div>
                  <div className="grid grid-cols-[120px_auto] items-center p-3">
                    <span className="text-gray-700 font-medium flex justify-between pr-4">
                      SKU
                      <span>:</span>
                    </span>
                    <span className="text-gray-600"> {product.sku}</span>
                  </div>
                  <div className="grid grid-cols-[120px_auto] items-center p-3">
                    <span className="text-gray-700 font-medium flex justify-between pr-4">
                      brand
                      <span>:</span>
                    </span>
                    <span className="text-gray-600"> {product.brand}</span>
                  </div>
                  <div className="grid grid-cols-[120px_auto] items-center p-3">
                    <span className="text-gray-700 font-medium flex justify-between pr-4">
                      tags
                      <span>:</span>
                    </span>
                    <span className="text-gray-600">
                      {" "}
                      {product.tags.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DetailsTabs></DetailsTabs>
      </div>

      {/* <div className="flex justify-between ">
        <div>
          <h4 className="text-[#515751] text-sm font-medium">
            FIND YOUR FAVORITES
          </h4>
          <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
        </div>
        <div>
          <div className="flex justify-center items-center gap-4">
            <button>
              <IoIosArrowBack />
            </button>
            <button>
              <IoIosArrowForward />
            </button>
          </div>
        </div> 


      </div> */}

      <div>
        <div className="flex justify-between items-center w-full ">
          {/* লেখাগুলোর কন্টেইনার */}
          <div>
            <h4 className="text-[#515751] text-sm font-medium">
              FIND YOUR FAVORITES
            </h4>
            <h2 className="text-2xl font-bold mb-4">Recommended for you</h2>
          </div>

          {/* বাটনগুলোর কন্টেইনার */}
          <div>
            <div className="flex justify-center items-center gap-4">
              <button className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 bg-[#E2E5E1] hover:bg-[#D1D4D0] transition-colors">
                <IoIosArrowBack />
              </button>
              <button className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 bg-[#46AE3D] hover:bg-[#3A8D32] text-white transition-colors">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
        <ProductGrid />
      </div>

      <div className="w-full">
        <NewsletterSection />
      </div>
    </>
  );
};

export default ProductDetails;
