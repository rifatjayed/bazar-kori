// import React, { useState } from "react";
// import { useProducts } from "../context/ProductsProvider";
// // import ProductGrid from "../products/Products";
// import ProductCard from "../products/ProductCard";

// const Shop = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showAllCategories, setShowAllCategories] = useState(false);
//   const [showAllBrands, setShowAllBrands] = useState(false);
//   const [price, setPrice] = useState(250);
//   const [selectedReviews, setSelectedReviews] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   const { products } = useProducts();

//   // ✅ Dummy categories & brands define করে নিন
//   const categories = [
//     "Vegetables",
//     "Fruits",
//     "Dairy",
//     "Snacks",
//     "Beverages",
//     "Meat",
//     "Bakery",
//   ];

//   const brands = [
//     "FreshFarm",
//     "Nature’s Best",
//     "HealthyChoice",
//     "EcoFoods",
//     "OrganicWorld",
//     "GreenLeaf",
//     "DailyFresh",
//   ];

//   const handleReviewChange = (star) => {
//     setSelectedReviews((prev) =>
//       prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
//     );
//   };

//   const visibleCategories = showAllCategories
//     ? categories
//     : categories.slice(0, 5);
//   const visibleBrands = showAllBrands ? brands : brands.slice(0, 5);

//   return (
//     <div className="flex gap-6 px-20 py-6">
//       {/* Left Filter */}
//       <aside className="w-1/4 bg-white shadow p-4 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Filters</h2>

//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Category</h3>

//           {visibleCategories.map((cat, idx) => (
//             <label key={idx} className="flex items-center space-x-2 mb-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 onChange={() => setSelectedCategory(cat)}
//               />
//               <span>{cat}</span>
//             </label>
//           ))}

//           {/* See more / See less button */}
//           {categories.length > 5 && (
//             <button
//               onClick={() => setShowAllCategories(!showAllCategories)}
//               className="text-green-600 text-sm font-medium mt-2 hover:underline"
//             >
//               {showAllCategories ? "See less -" : "See more +"}
//             </button>
//           )}
//         </div>

//         {/* Price Filter */}
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Price</h3>
//           <input
//             type="range"
//             min="0"
//             max="500"
//             value={price}
//             onChange={(e) => setPrice(Number(e.target.value))}
//             className="w-full accent-green-600"
//           />
//           <p className="text-sm mt-2 text-gray-600">
//             Selected Price: <span className="font-semibold">${price}</span>
//           </p>
//         </div>

//         {/* Review Filter */}
//         {/* <div>
//           <h3 className="font-medium mb-2">Review</h3>
//           {[5, 4, 3, 2, 1].map((star) => (
//             <label key={star} className="flex items-center space-x-2 mb-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 checked={selectedReviews.includes(star)}
//                 onChange={() => handleReviewChange(star)}
//               />
//               <span className="flex text-yellow-500">{"⭐".repeat(star)}</span>
//             </label>
//           ))}
//         </div> */}
//         {/* <div>
//           <h3 className="font-medium mb-2">Review</h3>
//           {[5, 4, 3, 2, 1].map((star) => (
//             <label
//               key={star}
//               className="flex items-center space-x-2 mb-2 cursor-pointer"
//             >
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 checked={selectedReviews.includes(star)}
//                 onChange={() => handleReviewChange(star)}
//               />
//               <span className="flex">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <span
//                     key={i}
//                     className={i < star ? "text-yellow-500" : "text-gray-300"}
//                   >
//                     ⭐
//                   </span>
//                 ))}
//               </span>
//             </label>
//           ))}
//         </div> */}
//         {/* Review Filter */}
//         <div>
//           <h3 className="font-medium mb-2">Review</h3>
//           {[5, 4, 3, 2, 1].map((rating) => (
//             <label
//               key={rating}
//               className="flex items-center space-x-2 mb-2 cursor-pointer"
//             >
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 checked={selectedReviews.includes(rating)}
//                 onChange={() => handleReviewChange(rating)}
//               />
//               <span className="flex">
//                 {Array.from({ length: 5 }).map((_, i) => (
//                   <span
//                     key={i}
//                     className={i < rating ? "text-yellow-500" : "text-gray-300"}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </span>
//             </label>
//           ))}
//         </div>
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Brand</h3>

//           {visibleBrands.map((brand, idx) => (
//             <label key={idx} className="flex items-center space-x-2 mb-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 onChange={() => setSelectedBrand(brand)}
//               />
//               <span>{brand}</span>
//             </label>
//           ))}

//           {/* See more / See less button */}
//           {brands.length > 5 && (
//             <button
//               onClick={() => setShowAllBrands(!showAllBrands)}
//               className="text-green-600 text-sm font-medium mt-2 hover:underline"
//             >
//               {showAllBrands ? "See less -" : "See more +"}
//             </button>
//           )}
//         </div>
//       </aside>

//       {/* Right Product List */}
//       <main className="w-3/4">
//         <h2 className="text-lg font-semibold mb-4">Showing products</h2>
//         <div className="grid grid-cols-3 gap-6">
//           {products.map((product, i) => (
//             // <div
//             //   key={product.id}
//             //   className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//             // >
//             //   <img
//             //     src={product.image}
//             //     alt={product.name}
//             //     className="w-full h-32 object-cover mb-4"
//             //   />
//             //   <h3 className="font-medium">{product.name}</h3>
//             //   {/* <p className="text-sm text-gray-500 line-through">
//             //     ${product.originalPrice}
//             //   </p> */}
//             //   {product.discountPercentage > 0 && (
//             //     <p className="text-sm text-gray-500 line-through">
//             //       ${product.originalPrice}
//             //     </p>
//             //   )}
//             //   <p className="text-lg font-semibold text-green-600">
//             //     ${product.price}
//             //   </p>
//             //   <div className="flex items-center text-yellow-500 text-sm">
//             //     {"⭐".repeat(product.rating)}
//             //   </div>
//             //   <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
//             //     Add to Cart
//             //   </button>
//             // </div>
//             <div
//               key={product.id}
//               className="flex flex-col justify-between border rounded-2xl shadow-md hover:shadow-xl transition bg-white p-4 h-full"
//             >
//               {/* Product Image */}
//               <div>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />

//                 {/* Product Title */}
//                 <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
//                   {product.name}
//                 </h3>

//                 {/* Price Section */}
//                 <div className="mb-2">
//                   {product.discountPercentage > 0 && (
//                     <p className="text-sm text-gray-400 line-through">
//                       ${product.originalPrice}
//                     </p>
//                   )}
//                   <p className="text-xl font-bold text-green-600">
//                     ${product.price}
//                   </p>
//                 </div>

//                 {/* Rating */}
//                 <div className="flex items-center text-yellow-500 text-sm mb-3">
//                   {"⭐".repeat(product.rating)}
//                 </div>
//               </div>

//               {/* Add to Cart Button */}
//               <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
//                 Add to Cart
//               </button>
//             </div>

//             // <ProductCard key={i} {...product}></ProductCard>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useMemo } from "react";
import { useProducts } from "../context/ProductsProvider";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [price, setPrice] = useState(250);
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const { products } = useProducts();

  // ✅ unique category & brand বের করা
  const categories = useMemo(
    () => [...new Set(products.map((p) => p.category))],
    [products]
  );

  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products]
  );

  const handleReviewChange = (star) => {
    setSelectedReviews((prev) =>
      prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
    );
  };

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);
  const visibleBrands = showAllBrands ? brands : brands.slice(0, 5);

  return (
    <div className="flex gap-6 px-20 py-6">
      {/* Left Filter */}
      <aside className="w-1/4 bg-white shadow p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Category Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Category</h3>
          {visibleCategories.map((cat, idx) => (
            <label key={idx} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
              />
              <span>{cat}</span>
            </label>
          ))}

          {categories.length > 5 && (
            <button
              onClick={() => setShowAllCategories(!showAllCategories)}
              className="text-green-600 text-sm font-medium mt-2 hover:underline"
            >
              {showAllCategories ? "See less -" : "See more +"}
            </button>
          )}
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Price</h3>
          <input
            type="range"
            min="0"
            max="500"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-green-600"
          />
          <p className="text-sm mt-2 text-gray-600">
            Selected Price: <span className="font-semibold">${price}</span>
          </p>
        </div>

        {/* Review Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Review</h3>
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center space-x-2 mb-2 cursor-pointer"
            >
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedReviews.includes(rating)}
                onChange={() => handleReviewChange(rating)}
              />
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={i < rating ? "text-yellow-500" : "text-gray-300"}
                  >
                    ★
                  </span>
                ))}
              </span>
            </label>
          ))}
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Brand</h3>
          {visibleBrands.map((brand, idx) => (
            <label key={idx} className="flex items-center space-x-2 mb-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={selectedBrand === brand}
                onChange={() => setSelectedBrand(brand)}
              />
              <span>{brand}</span>
            </label>
          ))}

          {brands.length > 5 && (
            <button
              onClick={() => setShowAllBrands(!showAllBrands)}
              className="text-green-600 text-sm font-medium mt-2 hover:underline"
            >
              {showAllBrands ? "See less -" : "See more +"}
            </button>
          )}
        </div>
      </aside>

      {/* Right Product List */}
      <main className="w-3/4">
        <h2 className="text-lg font-semibold mb-4">Showing products</h2>
        <div className="grid grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between border rounded-2xl shadow-md hover:shadow-xl transition bg-white p-4 h-full"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <div className="mb-2">
                  {product.discountPercentage > 0 && (
                    <p className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </p>
                  )}
                  <p className="text-xl font-bold text-green-600">
                    ${product.price}
                  </p>
                </div>
                <div className="flex items-center text-yellow-500 text-sm mb-3">
                  {"⭐".repeat(product.rating)}
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
