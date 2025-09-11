// ...............................................................

import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import Service from "../Service";
import DetailsTabs from "./DetailsTabs";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";
import ProductGrid from "../products/Products";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useProducts();

  // ✅ Quantity state যোগ করা হয়েছে
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedWeight, setSelectedWeight] = useState(null);

  // ✅ Thumbnail image state যোগ করা হয়েছে
  const [mainImage, setMainImage] = useState(
    product ? product.images.main : ""
  );

  // ✅ Quantity বাড়ানোর জন্য হ্যান্ডলার ফাংশন
  const handleIncrease = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // ✅ Quantity কমানোর জন্য হ্যান্ডলার ফাংশন
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedWeight) {
      alert("Please select a weight before adding to cart.");
      return;
    }

    // ✅ FIX: এই লাইনটি যোগ করা হয়েছে। এটিই প্রোডাক্টকে কার্টে যোগ করবে।
    if (product) {
      addToCart(product, quantity, selectedWeight);
    }
  };

  if (!product) {
    return <h2 className="text-center mt-10">Product Not Found</h2>;
  }

  // URL পরিবর্তন হলে mainImage রিসেট করার জন্য
  if (
    mainImage !== product.images.main &&
    product.images.thumbnails.includes(mainImage) === false
  ) {
    setMainImage(product.images.main);
  }

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Image Section */}
          <div className="md:w-1/2">
            <img
              src={mainImage} // ✅ State থেকে main image দেখানো হচ্ছে
              alt={product.name}
              className="w-full h-auto rounded-lg object-cover shadow-md mb-4"
            />

            {/* Thumbnail Images */}
            <div className="flex gap-2">
              {product.images.thumbnails.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)} // ✅ থাম্বনেইলে ক্লিক করলে main image পরিবর্তন হবে
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition ${
                    mainImage === img
                      ? "ring-2 ring-green-500"
                      : "hover:ring-2 hover:ring-green-500"
                  }`}
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
                        i < Math.round(product.rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }`}
                      viewBox="0 0 24 24"
                      fill={
                        i < Math.round(product.rating) ? "currentColor" : "none"
                      }
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
                  ${product.price}
                </span>
                {product.discountPercentage > 0 && (
                  <>
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-medium">
                      {product.discountPercentage}% Off
                    </span>
                  </>
                )}
              </div>
              <p className="mt-2 text-gray-600">{product.description}</p>
            </div>

            {/* Sale Timer */}
            {product.salesCountdown && product.salesCountdown.hours > 0 && (
              <div className="flex items-center gap-2 text-sm font-medium mb-6">
                <h3 className="text-lg font-semibold text-gray-700">
                  Sales Ends In
                </h3>
                <div className="flex space-x-4">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-800">
                      {String(product.salesCountdown.hours).padStart(2, "0")}
                    </span>
                    <span className="block text-sm text-gray-500">HRS</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-800">
                      {String(product.salesCountdown.minutes).padStart(2, "0")}
                    </span>
                    <span className="block text-sm text-gray-500">MIN</span>
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-800">
                      {String(product.salesCountdown.seconds).padStart(2, "0")}
                    </span>
                    <span className="block text-sm text-gray-500">SEC</span>
                  </div>
                </div>
              </div>
            )}

            {/* Weight Selection */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Weight
              </h3>
              <div className="flex flex-wrap gap-2">
                {/* {product.weightOptions.map((weight) => (
                  <button
                    key={weight}
                    className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    {weight}
                  </button>
                ))} */}
                {product.weightOptions.map((weight) => (
                  <button
                    key={weight}
                    // ✅ FIX: onClick হ্যান্ডলার এবং সিলেক্টেড স্টাইল আবার যোগ করা হয়েছে
                    onClick={() => setSelectedWeight(weight)}
                    className={`px-4 py-2 border rounded-md transition duration-200 ${
                      selectedWeight === weight
                        ? "bg-green-600 text-white border-green-600"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
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
                  {/* Quantity box */}
                  <div className="flex w-30 items-center border border-gray-200 rounded-full overflow-hidden">
                    <button
                      onClick={handleDecrease} // ✅ ডিক্রিমেন্ট হ্যান্ডলার যোগ করা হয়েছে
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 font-medium text-center bg-white">
                      {String(quantity).padStart(2, "0")}{" "}
                      {/* ✅ State থেকে quantity দেখানো হচ্ছে */}
                    </span>
                    <button
                      onClick={handleIncrease} // ✅ ইনক্রিমেন্ট হ্যান্ডলার যোগ করা হয়েছে
                      className="px-3 py-1.5 text-gray-600 hover:bg-gray-100 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={quantity === product.stock}
                    >
                      +
                    </button>
                  </div>

                  {/* Add To Cart button */}
                  <button
                    onClick={handleAddToCart}
                    className="px-5 py-2.5 w-70 text-[#46AE3D] border border-[#46AE3D] font-medium rounded-full hover:bg-green-50 transition"
                  >
                    Add To Cart
                  </button>

                  {/* Bookmark button */}
                  <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full hover:bg-gray-100">
                    <BsBookmark className="text-lg" />
                  </button>
                </div>
                {/* Stock information */}
                <p className="text-sm text-gray-500 mt-2">
                  Only{" "}
                  <span className="font-semibold text-orange-500">
                    {product.stock} items
                  </span>{" "}
                  left in stock!
                </p>
              </div>

              {/* Buy Now Button */}
              <div className="mb-6">
                <button className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-full hover:bg-green-700 transition">
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
                      Brand
                      <span>:</span>
                    </span>
                    <span className="text-gray-600"> {product.brand}</span>
                  </div>
                  <div className="grid grid-cols-[120px_auto] items-center p-3">
                    <span className="text-gray-700 font-medium flex justify-between pr-4">
                      Tags
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

      <div className="max-w-6xl mx-auto px-6">
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
        <Service></Service>
        <NewsletterSection />
      </div>
    </>
  );
};

export default ProductDetails;
