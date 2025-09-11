// import React, { useState, useMemo } from "react";
// import { useProducts } from "../context/ProductsProvider";

// const Shop = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showAllCategories, setShowAllCategories] = useState(false);
//   const [showAllBrands, setShowAllBrands] = useState(false);
//   const [price, setPrice] = useState(250);
//   const [selectedReviews, setSelectedReviews] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   const { products } = useProducts();

//   // ✅ unique category & brand বের করা
//   const categories = useMemo(
//     () => [...new Set(products.map((p) => p.category))],
//     [products]
//   );

//   const brands = useMemo(
//     () => [...new Set(products.map((p) => p.brand))],
//     [products]
//   );

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

//         {/* Category Filter */}
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Category</h3>
//           {visibleCategories.map((cat, idx) => (
//             <label key={idx} className="flex items-center space-x-2 mb-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 checked={selectedCategory === cat}
//                 onChange={() => setSelectedCategory(cat)}
//               />
//               <span>{cat}</span>
//             </label>
//           ))}

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
//         <div className="mb-6">
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

//         {/* Brand Filter */}
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Brand</h3>
//           {visibleBrands.map((brand, idx) => (
//             <label key={idx} className="flex items-center space-x-2 mb-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 checked={selectedBrand === brand}
//                 onChange={() => setSelectedBrand(brand)}
//               />
//               <span>{brand}</span>
//             </label>
//           ))}

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
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="flex flex-col justify-between border rounded-2xl shadow-md hover:shadow-xl transition bg-white p-4 h-full"
//             >
//               <div>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
//                   {product.name}
//                 </h3>
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
//                 <div className="flex items-center text-yellow-500 text-sm mb-3">
//                   {"⭐".repeat(product.rating)}
//                 </div>
//               </div>
//               <button className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Shop;

// import React, { useState, useMemo } from "react";
// import { MdOutlineShoppingCart } from "react-icons/md";

// import { useProducts } from "../context/ProductsProvider";

// const Shop = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showAllCategories, setShowAllCategories] = useState(false);
//   const [showAllBrands, setShowAllBrands] = useState(false);
//   const [price, setPrice] = useState(250);
//   const [selectedReviews, setSelectedReviews] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   const { products } = useProducts();

//   // ✅ unique category & brand বের করা
//   const categories = useMemo(
//     () => [...new Set(products.map((p) => p.category))],
//     [products]
//   );

//   const brands = useMemo(
//     () => [...new Set(products.map((p) => p.brand))],
//     [products]
//   );

//   const handleReviewChange = (star) => {
//     setSelectedReviews((prev) =>
//       prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
//     );
//   };

//   const visibleCategories = showAllCategories
//     ? categories
//     : categories.slice(0, 5);
//   const visibleBrands = showAllBrands ? brands : brands.slice(0, 5);

//   // ✅ filter করা products
//   const filteredProducts = products.filter((p) => {
//     const matchCategory = selectedCategory
//       ? p.category === selectedCategory
//       : true;
//     const matchBrand = selectedBrand ? p.brand === selectedBrand : true;
//     const matchPrice = p.price <= price;
//     const matchReview =
//       selectedReviews.length > 0 ? selectedReviews.includes(p.rating) : true;

//     return matchCategory && matchBrand && matchPrice && matchReview;
//   });

//   return (
//     <div className="flex gap-6 px-20 py-6">
//       {/* Left Filter */}
//       <aside className="w-1/4 bg-white shadow p-4 rounded-lg">
//         <h2 className="text-lg font-semibold mb-4">Filters</h2>

//         {/* Category Filter */}
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Category</h3>
//           {visibleCategories.map((cat, idx) => (
//             <label key={idx} className="flex items-center space-x-2 mb-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 checked={selectedCategory === cat}
//                 onChange={() =>
//                   setSelectedCategory(selectedCategory === cat ? null : cat)
//                 }
//               />
//               <span>{cat}</span>
//             </label>
//           ))}

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
//         <div className="mb-6">
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

//         {/* Brand Filter */}
//         <div className="mb-6">
//           <h3 className="font-medium mb-2">Brand</h3>
//           {visibleBrands.map((brand, idx) => (
//             <label key={idx} className="flex items-center space-x-2 mb-2">
//               <input
//                 type="checkbox"
//                 className="w-4 h-4"
//                 checked={selectedBrand === brand}
//                 onChange={() =>
//                   setSelectedBrand(selectedBrand === brand ? null : brand)
//                 }
//               />
//               <span>{brand}</span>
//             </label>
//           ))}

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
//         <h2 className="text-lg font-semibold mb-4">
//           Showing {filteredProducts.length} products
//         </h2>
//         <div className="grid grid-cols-3 gap-6">
//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="flex flex-col justify-between border rounded-2xl shadow-md hover:shadow-xl transition bg-white p-4 h-full"
//             >
//               <div>
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
//                   {product.name}
//                 </h3>
//                 <div className="mb-2 flex items-center gap-5 ">
//                   <div>
//                     <p className="text-lg font-medium text-[#0D270C]">
//                       ${product.price}
//                     </p>
//                   </div>

//                   {product.discountPercentage > 0 && (
//                     <p className="text-lg font-medium text-gray-400 line-through">
//                       ${product.originalPrice}
//                     </p>
//                   )}
//                 </div>
//                 <div className="flex items-center text-yellow-500 text-sm mb-3">
//                   {"⭐".repeat(product.rating)}
//                 </div>
//               </div>
//               <button className="w-full text-sm font-medium flex items-center justify-center text-[#2C6F26] py-2 border border-[#C8D1C7] rounded-4xl hover:bg-[#2C6F26] hover:text-white transition">
//                 <span className="mr-2">
//                   <MdOutlineShoppingCart />
//                 </span>
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Shop;

// import React, { useState, useMemo, useEffect } from "react";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import NewsletterSection from "../NewsletterSection/NewsletterSection";
// import Service from "../Service";
// import { Link } from "react-router-dom";
// import { useProducts } from "../context/ProductsProvider";

// const Shop = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [showAllCategories, setShowAllCategories] = useState(false);
//   const [showAllBrands, setShowAllBrands] = useState(false);
//   const [price, setPrice] = useState(250);
//   const [selectedReviews, setSelectedReviews] = useState([]);
//   const [selectedBrand, setSelectedBrand] = useState(null);

//   // ✅ Pagination State যোগ করা
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 9; // প্রতি পেজে কয়টি প্রোডাক্ট দেখাবে

//   const { products } = useProducts();

//   // ✅ unique category & brand বের করা
//   const categories = useMemo(
//     () => [...new Set(products.map((p) => p.category))],
//     [products]
//   );

//   const brands = useMemo(
//     () => [...new Set(products.map((p) => p.brand))],
//     [products]
//   );

//   const handleReviewChange = (star) => {
//     setSelectedReviews((prev) =>
//       prev.includes(star) ? prev.filter((s) => s !== star) : [...prev, star]
//     );
//   };

//   const visibleCategories = showAllCategories
//     ? categories
//     : categories.slice(0, 5);
//   const visibleBrands = showAllBrands ? brands : brands.slice(0, 5);

//   // ✅ filter করা products
//   const filteredProducts = useMemo(() => {
//     return products.filter((p) => {
//       const matchCategory = selectedCategory
//         ? p.category === selectedCategory
//         : true;
//       const matchBrand = selectedBrand ? p.brand === selectedBrand : true;
//       const matchPrice = p.price <= price;
//       // रिव्यु ফিল্টারিং লজিক আপডেট করা হয়েছে, কারণ আগের লজিকে শুধুমাত্র முழு எண் রেটিং ম্যাচ করতো।
//       // এখন এটি >= সিলেক্টেড রেটিং এর প্রোডাক্ট দেখাবে।
//       const matchReview =
//         selectedReviews.length > 0
//           ? selectedReviews.some((rating) => Math.round(p.rating) === rating)
//           : true;

//       return matchCategory && matchBrand && matchPrice && matchReview;
//     });
//   }, [products, selectedCategory, selectedBrand, price, selectedReviews]);

//   // ✅ ফিল্টার পরিবর্তন হলে প্রথম পেজে ফিরে আসার জন্য useEffect
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedCategory, selectedBrand, price, selectedReviews]);

//   // ✅ Pagination Logic: বর্তমান পেজের জন্য product গুলোকে slice করা
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstProduct,
//     indexOfLastProduct
//   );
//   const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     window.scrollTo(0, 0); // পেজ পরিবর্তনের পর উপরে স্ক্রল করার জন্য
//   };

//   return (
//     <>
//       <div className="flex gap-6 px-4 sm:px-10 md:px-20 py-6">
//         {/* Left Filter */}
//         <aside className="w-1/4 hidden lg:block bg-white shadow p-4 rounded-lg self-start">
//           {/* ... (আপনার ফিল্টারের কোড অপরিবর্তিত) ... */}
//           <h2 className="text-lg font-semibold mb-4">Filters</h2>

//           {/* Category Filter */}
//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Category</h3>
//             {visibleCategories.map((cat, idx) => (
//               <label key={idx} className="flex items-center space-x-2 mb-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4"
//                   checked={selectedCategory === cat}
//                   onChange={() =>
//                     setSelectedCategory(selectedCategory === cat ? null : cat)
//                   }
//                 />
//                 <span>{cat}</span>
//               </label>
//             ))}

//             {categories.length > 5 && (
//               <button
//                 onClick={() => setShowAllCategories(!showAllCategories)}
//                 className="text-green-600 text-sm font-medium mt-2 hover:underline"
//               >
//                 {showAllCategories ? "See less -" : "See more +"}
//               </button>
//             )}
//           </div>

//           {/* Price Filter */}
//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Price</h3>
//             <input
//               type="range"
//               min="0"
//               max="500"
//               value={price}
//               onChange={(e) => setPrice(Number(e.target.value))}
//               className="w-full accent-green-600"
//             />
//             <p className="text-sm mt-2 text-gray-600">
//               Selected Price: <span className="font-semibold">${price}</span>
//             </p>
//           </div>

//           {/* Review Filter */}
//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Review</h3>
//             {[5, 4, 3, 2, 1].map((rating) => (
//               <label
//                 key={rating}
//                 className="flex items-center space-x-2 mb-2 cursor-pointer"
//               >
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4"
//                   checked={selectedReviews.includes(rating)}
//                   onChange={() => handleReviewChange(rating)}
//                 />
//                 <span className="flex">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <span
//                       key={i}
//                       className={
//                         i < rating ? "text-yellow-500" : "text-gray-300"
//                       }
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </span>
//               </label>
//             ))}
//           </div>

//           {/* Brand Filter */}
//           <div className="mb-6">
//             <h3 className="font-medium mb-2">Brand</h3>
//             {visibleBrands.map((brand, idx) => (
//               <label key={idx} className="flex items-center space-x-2 mb-2">
//                 <input
//                   type="checkbox"
//                   className="w-4 h-4"
//                   checked={selectedBrand === brand}
//                   onChange={() =>
//                     setSelectedBrand(selectedBrand === brand ? null : brand)
//                   }
//                 />
//                 <span>{brand}</span>
//               </label>
//             ))}

//             {brands.length > 5 && (
//               <button
//                 onClick={() => setShowAllBrands(!showAllBrands)}
//                 className="text-green-600 text-sm font-medium mt-2 hover:underline"
//               >
//                 {showAllBrands ? "See less -" : "See more +"}
//               </button>
//             )}
//           </div>
//         </aside>

//         {/* Right Product List */}
//         <main className="w-full lg:w-3/4">
//           <h2 className="text-lg font-semibold mb-4">
//             Showing {currentProducts.length} of {filteredProducts.length}{" "}
//             products
//           </h2>
//           {currentProducts.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-6">
//               {/* ✅ এখানে currentProducts ব্যবহার করা হয়েছে */}
//               {currentProducts.map((product) => (
//                 <Link to={`/product/${product.id}`}>
//                   <div
//                     key={product.id}
//                     className="flex flex-col justify-between  rounded-2xl shadow-md hover:shadow-xl transition bg-white p-4 h-full"
//                   >
//                     <div>
//                       {/* ❗️❗️ আপনার data structure অনুযায়ী product.image কে product.images.main করা হয়েছে */}
//                       <img
//                         src={product.images.main}
//                         alt={product.name}
//                         className="w-full h-40 object-cover rounded-lg mb-4"
//                       />
//                       <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
//                         {product.name}
//                       </h3>
//                       <div className="mb-2 flex items-center gap-5 ">
//                         <div>
//                           <p className="text-lg font-medium text-[#0D270C]">
//                             ${product.price}
//                           </p>
//                         </div>

//                         {product.discountPercentage > 0 && (
//                           <p className="text-lg font-medium text-gray-400 line-through">
//                             ${product.originalPrice}
//                           </p>
//                         )}
//                       </div>
//                       <div className="flex items-center text-sm mb-3">
//                         <span className="flex text-yellow-500">
//                           {"★".repeat(Math.round(product.rating))}
//                         </span>
//                         <span className="flex text-gray-300">
//                           {"★".repeat(5 - Math.round(product.rating))}
//                         </span>
//                         <span className="ml-2 text-gray-500">
//                           ({product.reviewCount})
//                         </span>
//                       </div>
//                     </div>
//                     <button className="w-full mt-4 text-sm font-medium flex items-center justify-center text-[#2C6F26] py-2 border border-[#C8D1C7] rounded-full hover:bg-[#2C6F26] hover:text-white transition">
//                       <span className="mr-2 text-lg">
//                         <MdOutlineShoppingCart />
//                       </span>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20">
//               <h3 className="text-2xl font-semibold text-gray-700">
//                 No Products Found
//               </h3>
//               <p className="text-gray-500 mt-2">
//                 Try adjusting your filters to find what you're looking for.
//               </p>
//             </div>
//           )}

//           {/* ✅ Pagination UI */}
//           {totalPages > 1 && (
//             <div className="flex justify-center items-center mt-10 space-x-2">
//               <button
//                 onClick={() => paginate(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Prev
//               </button>
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (pageNumber) => (
//                   <button
//                     key={pageNumber}
//                     onClick={() => paginate(pageNumber)}
//                     className={`px-4 py-2 border rounded-md ${
//                       currentPage === pageNumber
//                         ? "bg-green-600 text-white"
//                         : "bg-white text-gray-700 hover:bg-gray-100"
//                     }`}
//                   >
//                     {pageNumber}
//                   </button>
//                 )
//               )}
//               <button
//                 onClick={() => paginate(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Next
//               </button>
//             </div>
//           )}
//         </main>
//       </div>
//       <Service></Service>
//       <NewsletterSection></NewsletterSection>
//     </>
//   );
// };

// export default Shop;

import React, { useState, useMemo, useEffect } from "react";
import { MdOutlineShoppingCart, MdClose } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import Service from "../Service";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsProvider";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [price, setPrice] = useState(250);
  const [selectedReviews, setSelectedReviews] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  // ✅ --- RESPONSIVE STATE ---
  // State to control the mobile filter drawer visibility
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // ✅ Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  const { products } = useProducts();

  // ✅ Unique category & brand
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

  // ✅ Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = selectedCategory
        ? p.category === selectedCategory
        : true;
      const matchBrand = selectedBrand ? p.brand === selectedBrand : true;
      const matchPrice = p.price <= price;
      const matchReview =
        selectedReviews.length > 0
          ? selectedReviews.some((rating) => Math.round(p.rating) === rating)
          : true;

      return matchCategory && matchBrand && matchPrice && matchReview;
    });
  }, [products, selectedCategory, selectedBrand, price, selectedReviews]);

  // ✅ Reset to page 1 on filter change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedBrand, price, selectedReviews]);

  // ✅ Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Effect to lock body scroll when filter drawer is open on mobile
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterOpen]);

  return (
    <>
      {/* CHANGE: Optimized padding for different screen sizes */}
      <div className="flex gap-6 px-4 md:px-6 lg:px-8 py-6">
        {/* --- RESPONSIVE FILTER DRAWER --- */}
        {/* 1. Overlay (visible on mobile when drawer is open) */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity lg:hidden ${
            isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsFilterOpen(false)}
        ></div>

        {/* 2. Filter Aside (Sidebar for desktop, slide-out drawer for mobile) */}
        <aside
          className={`
            bg-white shadow-lg p-4 rounded-lg self-start overflow-y-auto 
            transition-transform duration-300 ease-in-out
            fixed top-0 left-0 h-full w-4/5 max-w-xs z-50 
            lg:static lg:w-1/4 lg:h-auto lg:translate-x-0 lg:shadow-md
            ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Mobile Header for Filter Drawer */}
          <div className="flex justify-between items-center mb-4 lg:hidden">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="p-2 -mr-2"
            >
              <MdClose size={24} />
            </button>
          </div>

          {/* All Filter Sections (Category, Price, etc.) */}
          {/* Category Filter */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Category</h3>
            {visibleCategories.map((cat, idx) => (
              <label key={idx} className="flex items-center space-x-2 mb-2">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectedCategory === cat}
                  onChange={() =>
                    setSelectedCategory(selectedCategory === cat ? null : cat)
                  }
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
              Price up to: <span className="font-semibold">${price}</span>
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
                      className={
                        i < rating ? "text-yellow-500" : "text-gray-300"
                      }
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
                  onChange={() =>
                    setSelectedBrand(selectedBrand === brand ? null : brand)
                  }
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
        <main className="w-full lg:w-3/4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base md:text-lg font-semibold">
              Showing {currentProducts.length} of {filteredProducts.length}{" "}
              products
            </h2>
            {/* 3. "Filters" Button (visible only on mobile) */}
            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium active:bg-gray-100"
            >
              <FaFilter className="text-gray-600" />
              Filters
            </button>
          </div>

          {currentProducts.length > 0 ? (
            // CHANGE: Added md:grid-cols-3 for a smoother grid transition
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                // FIX: Key moved to the outermost element (Link)
                <Link to={`/product/${product.id}`} key={product.id}>
                  <div className="flex flex-col justify-between rounded-2xl shadow-md hover:shadow-xl transition bg-white p-4 h-full">
                    <div>
                      <img
                        src={product.images.main}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                      />
                      <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="mb-2 flex items-center gap-5 ">
                        <div>
                          <p className="text-lg font-medium text-[#0D270C]">
                            ${product.price}
                          </p>
                        </div>
                        {product.discountPercentage > 0 && (
                          <p className="text-lg font-medium text-gray-400 line-through">
                            ${product.originalPrice}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center text-sm mb-3">
                        <span className="flex text-yellow-500">
                          {"★".repeat(Math.round(product.rating))}
                        </span>
                        <span className="flex text-gray-300">
                          {"★".repeat(5 - Math.round(product.rating))}
                        </span>
                        <span className="ml-2 text-gray-500">
                          ({product.reviewCount})
                        </span>
                      </div>
                    </div>
                    <button className="w-full mt-4 text-sm font-medium flex items-center justify-center text-[#2C6F26] py-2 border border-[#C8D1C7] rounded-full hover:bg-[#2C6F26] hover:text-white transition">
                      <span className="mr-2 text-lg">
                        <MdOutlineShoppingCart />
                      </span>
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700">
                No Products Found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your filters to find what you're looking for.
              </p>
            </div>
          )}

          {/* ✅ Pagination UI */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-10 space-x-1 sm:space-x-2">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => paginate(pageNumber)}
                    className={`px-3 sm:px-4 py-2 border rounded-md text-sm sm:text-base ${
                      currentPage === pageNumber
                        ? "bg-green-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 py-2 border rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
      <Service />
      <NewsletterSection />
    </>
  );
};

export default Shop;
