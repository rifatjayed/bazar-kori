// import { useEffect, useMemo, useRef, useState } from "react";

// export default function DetailsTabs() {
//   const tabs = useMemo(
//     () => [
//       { id: "description", label: "DESCRIPTION" },
//       { id: "additional", label: "ADDITIONAL INFORMATION" },
//       { id: "review", label: "REVIEW" },
//     ],
//     []
//   );

//   const [active, setActive] = useState("description");
//   const containerRef = useRef(null);
//   const btnRefs = useRef({});
//   const indicatorRef = useRef(null);

//   // Move the underline indicator to the active tab
//   useEffect(() => {
//     const btn = btnRefs.current[active];
//     const container = containerRef.current;
//     const indicator = indicatorRef.current;
//     if (!btn || !container || !indicator) return;

//     const btnRect = btn.getBoundingClientRect();
//     const cRect = container.getBoundingClientRect();
//     const left = btnRect.left - cRect.left + container.scrollLeft;
//     indicator.style.width = `${btnRect.width}px`;
//     indicator.style.transform = `translateX(${left}px)`;
//   }, [active]);

//   return (
//     <div className="mx-auto max-w-5xl px-4 py-10">
//       {/* Tabs Header */}
//       <div
//         ref={containerRef}
//         className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
//         role="tablist"
//         aria-label="Product details tabs"
//       >
//         <div className="flex min-w-max gap-8">
//           {tabs.map((t) => (
//             <button
//               key={t.id}
//               ref={(el) => (btnRefs.current[t.id] = el)}
//               role="tab"
//               aria-selected={active === t.id}
//               aria-controls={`panel-${t.id}`}
//               id={`tab-${t.id}`}
//               onClick={() => setActive(t.id)}
//               className={`relative py-4 text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
//                 active === t.id
//                   ? "text-gray-900 font-semibold"
//                   : "text-gray-500"
//               }`}
//             >
//               {t.label}
//             </button>
//           ))}
//         </div>
//         {/* Active underline */}
//         <div
//           ref={indicatorRef}
//           className="pointer-events-none absolute bottom-0 h-0.5 bg-emerald-500 transition-transform duration-300"
//           style={{ width: 0, transform: "translateX(0px)" }}
//         />
//       </div>

//       {/* Panels */}
//       <div className="pt-8 text-gray-700">
//         {/* DESCRIPTION */}
//         {active === "description" && (
//           <section
//             role="tabpanel"
//             id="panel-description"
//             aria-labelledby="tab-description"
//             className="space-y-6"
//           >
//             <div className="space-y-2">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Description
//               </h3>
//               <p>
//                 Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
//                 perfect for quick and delicious meals. These high-quality shrimp
//                 are tender, flavorful, and ready to cook, making them ideal for
//                 pastas, stir-fries, and a variety of other recipes. Take the
//                 hassle out of meal preparation and enjoy gourmet results every
//                 time!
//               </p>
//             </div>
//             <ul className="list-disc pl-6 space-y-1">
//               <li>Lorem ipsum dolor sit amet</li>
//               <li>Pretium nunc enim auctor</li>
//               <li>Integer dictumst. Ut ac tempus.</li>
//               <li>Consectetur. Id viverra praesent a</li>
//             </ul>
//             <p>
//               Enjoy the convenience of Fresh Peeled and Deveined Shrimp, perfect
//               for quick and delicious meals. These high-quality shrimp are
//               tender, flavorful, and ready to cook, making them ideal for
//               pastas, stir-fries, and a variety of other recipes.
//             </p>
//           </section>
//         )}

//         {/* ADDITIONAL INFORMATION */}
//         {active === "additional" && (
//           <section
//             role="tabpanel"
//             id="panel-additional"
//             aria-labelledby="tab-additional"
//             className="space-y-6"
//           >
//             <h3 className="text-lg font-semibold text-gray-900">
//               Additional Information
//             </h3>
//             <div className="overflow-x-auto rounded-xl border border-gray-200">
//               <table className="min-w-full text-sm">
//                 <tbody>
//                   {[
//                     ["Brand", "OceanFresh"],
//                     ["Weight", "500g (approx.)"],
//                     ["Origin", "Imported"],
//                     ["Storage", "Keep frozen at -18°C"],
//                     ["Allergen", "Contains shellfish"],
//                   ].map(([k, v]) => (
//                     <tr className="even:bg-gray-50" key={k}>
//                       <th className="w-48 text-left font-medium text-gray-600 p-3 align-top">
//                         {k}
//                       </th>
//                       <td className="p-3 text-gray-800">{v}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </section>
//         )}

//         {/* REVIEW */}
//         {active === "review" && (
//           <section
//             role="tabpanel"
//             id="panel-review"
//             aria-labelledby="tab-review"
//             className="space-y-6"
//           >
//             <h3 className="text-lg font-semibold text-gray-900">Review</h3>
//             <p className="text-gray-600">
//               There are no reviews yet. Be the first to write one!
//             </p>
//             <form className="space-y-4 max-w-xl">
//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="name"
//                     className="text-sm font-medium text-gray-700"
//                   >
//                     Your name
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     className="h-10 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
//                     placeholder="John Doe"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="rating"
//                     className="text-sm font-medium text-gray-700"
//                   >
//                     Rating
//                   </label>
//                   <select
//                     id="rating"
//                     className="h-10 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
//                   >
//                     <option>5 - Excellent</option>
//                     <option>4 - Good</option>
//                     <option>3 - Average</option>
//                     <option>2 - Poor</option>
//                     <option>1 - Terrible</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor="message"
//                   className="text-sm font-medium text-gray-700"
//                 >
//                   Your review
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
//                   placeholder="Share your thoughts about the product..."
//                 />
//               </div>
//               <button
//                 type="button"
//                 className="rounded-2xl bg-emerald-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
//               >
//                 Submit Review
//               </button>
//             </form>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

// /*
// How to use:

// 1) Make sure Tailwind CSS is configured in your project.
// 2) Drop this component anywhere in your product page:
//    <ProductDetailsTabs />
// 3) The underline indicator will smoothly move to the active tab.
// 4) Content is keyboard accessible with roles/aria attributes.
// */

// import { useEffect, useMemo, useRef, useState } from "react";

// export default function DetailsTabs() {
//   const tabs = useMemo(
//     () => [
//       { id: "description", label: "DESCRIPTION" },
//       { id: "additional", label: "ADDITIONAL INFORMATION" },
//       { id: "review", label: "REVIEW" },
//     ],
//     []
//   );

//   const [active, setActive] = useState("description");
//   const containerRef = useRef(null);
//   const btnRefs = useRef({});
//   const indicatorRef = useRef(null);

//   // Move the underline indicator to the active tab
//   useEffect(() => {
//     const btn = btnRefs.current[active];
//     const container = containerRef.current;
//     const indicator = indicatorRef.current;
//     if (!btn || !container || !indicator) return;

//     const btnRect = btn.getBoundingClientRect();
//     const cRect = container.getBoundingClientRect();
//     const left = btnRect.left - cRect.left + container.scrollLeft;
//     indicator.style.width = `${btnRect.width}px`;
//     indicator.style.transform = `translateX(${left}px)`;
//   }, [active]);

//   return (
//     <div className="mx-auto px-4 py-10">
//       <div className="rounded-2xl border border-gray-200  p-6 bg-white">
//         {/* Tabs Header */}
//         <div
//           ref={containerRef}
//           className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
//           role="tablist"
//           aria-label="Product details tabs"
//         >
//           <div className="flex min-w-max gap-8">
//             {tabs.map((t) => (
//               <button
//                 key={t.id}
//                 ref={(el) => (btnRefs.current[t.id] = el)}
//                 role="tab"
//                 aria-selected={active === t.id}
//                 aria-controls={`panel-${t.id}`}
//                 id={`tab-${t.id}`}
//                 onClick={() => setActive(t.id)}
//                 className={`relative py-4 text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
//                   active === t.id
//                     ? "text-gray-900 font-semibold"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {t.label}
//               </button>
//             ))}
//           </div>
//           {/* Active underline */}
//           <div
//             ref={indicatorRef}
//             className="pointer-events-none absolute bottom-0 h-0.5 bg-emerald-500 transition-transform duration-300"
//             style={{ width: 0, transform: "translateX(0px)" }}
//           />
//         </div>

//         {/* Panels */}
//         <div className="pt-8 text-gray-700">
//           {/* DESCRIPTION */}
//           {active === "description" && (
//             <section
//               role="tabpanel"
//               id="panel-description"
//               aria-labelledby="tab-description"
//               className="space-y-6"
//             >
//               <div className="space-y-2">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   Description
//                 </h3>
//                 <p>
//                   Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
//                   perfect for quick and delicious meals. These high-quality
//                   shrimp are tender, flavorful, and ready to cook, making them
//                   ideal for pastas, stir-fries, and a variety of other recipes.
//                   Take the hassle out of meal preparation and enjoy gourmet
//                   results every time!
//                 </p>
//               </div>
//               <ul className="list-disc pl-6 space-y-1">
//                 <li>Lorem ipsum dolor sit amet</li>
//                 <li>Pretium nunc enim auctor</li>
//                 <li>Integer dictumst. Ut ac tempus.</li>
//                 <li>Consectetur. Id viverra praesent a</li>
//               </ul>
//               <p>
//                 Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
//                 perfect for quick and delicious meals. These high-quality shrimp
//                 are tender, flavorful, and ready to cook, making them ideal for
//                 pastas, stir-fries, and a variety of other recipes.
//               </p>
//             </section>
//           )}

//           {/* ADDITIONAL INFORMATION */}
//           {active === "additional" && (
//             <section
//               role="tabpanel"
//               id="panel-additional"
//               aria-labelledby="tab-additional"
//               className="space-y-6"
//             >
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Additional Information
//               </h3>
//               <div className="overflow-x-auto rounded-xl border border-gray-200">
//                 <table className="min-w-full text-sm">
//                   <tbody>
//                     {[
//                       ["Brand", "OceanFresh"],
//                       ["Weight", "500g (approx.)"],
//                       ["Origin", "Imported"],
//                       ["Storage", "Keep frozen at -18°C"],
//                       ["Allergen", "Contains shellfish"],
//                     ].map(([k, v]) => (
//                       <tr className="even:bg-gray-50" key={k}>
//                         <th className="w-48 text-left font-medium text-gray-600 p-3 align-top">
//                           {k}
//                         </th>
//                         <td className="p-3 text-gray-800">{v}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </section>
//           )}

//           {/* REVIEW */}
//           {active === "review" && (
//             <section
//               role="tabpanel"
//               id="panel-review"
//               aria-labelledby="tab-review"
//               className="space-y-6"
//             >
//               <h3 className="text-lg font-semibold text-gray-900">Review</h3>
//               <p className="text-gray-600">
//                 There are no reviews yet. Be the first to write one!
//               </p>
//               <form className="space-y-4 max-w-xl">
//                 <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                   <div className="flex flex-col gap-2">
//                     <label
//                       htmlFor="name"
//                       className="text-sm font-medium text-gray-700"
//                     >
//                       Your name
//                     </label>
//                     <input
//                       id="name"
//                       type="text"
//                       className="h-10 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
//                       placeholder="John Doe"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label
//                       htmlFor="rating"
//                       className="text-sm font-medium text-gray-700"
//                     >
//                       Rating
//                     </label>
//                     <select
//                       id="rating"
//                       className="h-10 rounded-xl border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
//                     >
//                       <option>5 - Excellent</option>
//                       <option>4 - Good</option>
//                       <option>3 - Average</option>
//                       <option>2 - Poor</option>
//                       <option>1 - Terrible</option>
//                     </select>
//                   </div>
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <label
//                     htmlFor="message"
//                     className="text-sm font-medium text-gray-700"
//                   >
//                     Your review
//                   </label>
//                   <textarea
//                     id="message"
//                     rows={5}
//                     className="rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
//                     placeholder="Share your thoughts about the product..."
//                   />
//                 </div>
//                 <button
//                   type="button"
//                   className="rounded-2xl bg-emerald-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
//                 >
//                   Submit Review
//                 </button>
//               </form>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// /*
// How to use:

// 1) Make sure Tailwind CSS is configured in your project.
// 2) Drop this component anywhere in your product page:
//    <ProductDetailsTabs />
// 3) The underline indicator will smoothly move to the active tab.
// 4) Content is keyboard accessible with roles/aria attributes.
// 5) Now the entire section is wrapped in a rounded border box.
// */

// import { useEffect, useMemo, useRef, useState } from "react";
// import { Star } from "lucide-react";

// export default function DetailsTabs() {
//   const tabs = useMemo(
//     () => [
//       { id: "description", label: "DESCRIPTION" },
//       { id: "additional", label: "ADDITIONAL INFORMATION" },
//       { id: "review", label: "REVIEW" },
//     ],
//     []
//   );

//   const [active, setActive] = useState("description");
//   const containerRef = useRef(null);
//   const btnRefs = useRef({});
//   const indicatorRef = useRef(null);

//   // For review state
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [reviews, setReviews] = useState([
//     {
//       id: 1,
//       name: "Michael T",
//       rating: 4.9,
//       title: "Very good and delicious!!",
//       text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
//       date: "a day ago",
//       avatar: "https://i.pravatar.cc/100?img=12",
//     },
//     {
//       id: 2,
//       name: "Michael T",
//       rating: 4.9,
//       title: "Very good and delicious!!",
//       text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
//       date: "a day ago",
//       avatar: "https://i.pravatar.cc/100?img=11",
//     },
//   ]);

//   // Move the underline indicator to the active tab
//   useEffect(() => {
//     const btn = btnRefs.current[active];
//     const container = containerRef.current;
//     const indicator = indicatorRef.current;
//     if (!btn || !container || !indicator) return;

//     const btnRect = btn.getBoundingClientRect();
//     const cRect = container.getBoundingClientRect();
//     const left = btnRect.left - cRect.left + container.scrollLeft;
//     indicator.style.width = `${btnRect.width}px`;
//     indicator.style.transform = `translateX(${left}px)`;
//   }, [active]);

//   return (
//     <div className="mx-auto px-4 py-10">
//       <div className="rounded-2xl border border-gray-200  p-6 bg-white">
//         {/* Tabs Header */}
//         <div
//           ref={containerRef}
//           className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
//           role="tablist"
//           aria-label="Product details tabs"
//         >
//           <div className="flex min-w-max gap-8">
//             {tabs.map((t) => (
//               <button
//                 key={t.id}
//                 ref={(el) => (btnRefs.current[t.id] = el)}
//                 role="tab"
//                 aria-selected={active === t.id}
//                 aria-controls={`panel-${t.id}`}
//                 id={`tab-${t.id}`}
//                 onClick={() => setActive(t.id)}
//                 className={`relative py-4 text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
//                   active === t.id
//                     ? "text-gray-900 font-semibold"
//                     : "text-gray-500"
//                 }`}
//               >
//                 {t.label}
//               </button>
//             ))}
//           </div>
//           {/* Active underline */}
//           <div
//             ref={indicatorRef}
//             className="pointer-events-none absolute bottom-0 h-0.5 bg-emerald-500 transition-transform duration-300"
//             style={{ width: 0, transform: "translateX(0px)" }}
//           />
//         </div>

//         {/* Panels */}
//         <div className="pt-8 text-gray-700">
//           {/* DESCRIPTION */}
//           {active === "description" && (
//             <section className="space-y-6">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Description
//               </h3>
//               <p>
//                 Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
//                 perfect for quick and delicious meals.
//               </p>
//             </section>
//           )}

//           {/* ADDITIONAL */}
//           {active === "additional" && (
//             <section className="space-y-6">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 Additional Information
//               </h3>
//               <table className="min-w-full rounded-3xl border border-gray-200 text-sm">
//                 <tbody>
//                   {[
//                     ["Brand", "OceanFresh"],
//                     ["Weight", "500g"],
//                     ["Origin", "Imported"],
//                   ].map(([k, v]) => (
//                     <tr key={k} className="even:bg-gray-50">
//                       <th className="w-48 text-left p-3">{k}</th>
//                       <td className="p-3">{v}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </section>
//           )}

//           {/* REVIEW */}
//           {active === "review" && (
//             <section className="space-y-8">
//               {/* Review List */}
//               <div>
//                 <h2 className="font-semibold text-lg mb-4">Review list</h2>
//                 <div className="flex justify-between text-sm mb-4">
//                   <p>Showing 1 - {reviews.length} of 120 results</p>
//                   <select className="border rounded p-1">
//                     <option>Newest</option>
//                     <option>Oldest</option>
//                   </select>
//                 </div>
//                 <div className="space-y-6">
//                   {reviews.map((review) => (
//                     <div key={review.id} className="flex gap-4">
//                       <img
//                         src={review.avatar}
//                         alt={review.name}
//                         className="w-12 h-12 rounded-full"
//                       />
//                       <div>
//                         <div className="flex justify-between">
//                           <div>
//                             <h3 className="font-semibold">{review.name}</h3>
//                             <div className="flex items-center gap-1 text-yellow-500 text-sm">
//                               <Star size={16} className="fill-yellow-500" />
//                               {review.rating}
//                             </div>
//                           </div>
//                           <span className="text-gray-400 text-xs">
//                             {review.date}
//                           </span>
//                         </div>
//                         <h4 className="font-medium mt-1">{review.title}</h4>
//                         <p className="text-gray-600 text-sm mt-1">
//                           {review.text}
//                         </p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               {/* Add Review Form */}
//               <div>
//                 <h2 className="font-semibold text-lg mb-4">ADD A REVIEW</h2>
//                 <div className="mb-4">
//                   <label className="font-medium text-sm block mb-2">
//                     Rating <span className="text-red-500">*</span>
//                   </label>
//                   <div className="flex gap-2">
//                     {[...Array(5)].map((star, index) => {
//                       const ratingValue = index + 1;
//                       return (
//                         <Star
//                           key={index}
//                           size={24}
//                           className={`cursor-pointer ${
//                             ratingValue <= (hover || rating)
//                               ? "text-yellow-400 fill-yellow-400"
//                               : "text-gray-300"
//                           }`}
//                           onClick={() => setRating(ratingValue)}
//                           onMouseEnter={() => setHover(ratingValue)}
//                           onMouseLeave={() => setHover(0)}
//                         />
//                       );
//                     })}
//                   </div>
//                 </div>
//                 <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="col-span-2">
//                     <label className="text-sm font-medium">Title*</label>
//                     <input
//                       type="text"
//                       placeholder="Write short title.."
//                       className="w-full border rounded p-2 mt-1"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <label className="text-sm font-medium">
//                       Your detail review*
//                     </label>
//                     <textarea
//                       placeholder="Write details here..."
//                       className="w-full border rounded p-2 mt-1 h-28"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium">First Name*</label>
//                     <input
//                       type="text"
//                       placeholder="Name"
//                       className="w-full border rounded p-2 mt-1"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-sm font-medium">Email*</label>
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       className="w-full border rounded p-2 mt-1"
//                     />
//                   </div>
//                   <div className="col-span-2">
//                     <button
//                       type="submit"
//                       className="bg-green-600 text-white px-6 py-2 rounded mt-2"
//                     >
//                       Submit Review
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </section>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import { useEffect, useMemo, useRef, useState } from "react";
import { Star } from "lucide-react";

export default function DetailsTabs() {
  const tabs = useMemo(
    () => [
      { id: "description", label: "DESCRIPTION" },
      { id: "additional", label: "ADDITIONAL INFORMATION" },
      { id: "review", label: "REVIEW" },
    ],
    []
  );

  const [active, setActive] = useState("description");
  const containerRef = useRef(null);
  const btnRefs = useRef({});
  const indicatorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // For review state
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Michael T",
      rating: 4.9,
      title: "Very good and delicious!!",
      text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
      date: "a day ago",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      id: 2,
      name: "Michael T",
      rating: 4.9,
      title: "Very good and delicious!!",
      text: "Lorem ipsum dolor sit amet consectetur. Curabitur et vel purus quisque diam. Euismod aliquet quis suscipit feugiat tristique cursus consectetur nisl.",
      date: "a day ago",
      avatar: "https://i.pravatar.cc/100?img=11",
    },
  ]);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Move the underline indicator to the active tab
  useEffect(() => {
    const btn = btnRefs.current[active];
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!btn || !container || !indicator) return;

    const btnRect = btn.getBoundingClientRect();
    const cRect = container.getBoundingClientRect();
    const left = btnRect.left - cRect.left + container.scrollLeft;
    indicator.style.width = `${btnRect.width}px`;
    indicator.style.transform = `translateX(${left}px)`;
  }, [active, isMobile]);

  return (
    <div className="mx-auto px-4 py-6 md:py-10">
      <div className="rounded-2xl border border-gray-200 p-4 md:p-6 bg-white">
        {/* Tabs Header */}
        <div
          ref={containerRef}
          className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
          role="tablist"
          aria-label="Product details tabs"
        >
          <div className="flex min-w-max gap-4 md:gap-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                ref={(el) => (btnRefs.current[t.id] = el)}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`relative py-3 md:py-4 text-xs md:text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
                  active === t.id
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {isMobile ? t.label.split(" ")[0] : t.label}
              </button>
            ))}
          </div>
          {/* Active underline */}
          <div
            ref={indicatorRef}
            className="pointer-events-none absolute bottom-0 h-0.5 bg-emerald-500 transition-transform duration-300"
            style={{ width: 0, transform: "translateX(0px)" }}
          />
        </div>

        {/* Panels */}
        <div className="pt-6 md:pt-8 text-gray-700">
          {/* DESCRIPTION */}
          {active === "description" && (
            <section className="space-y-4 md:space-y-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Description
              </h3>
              <p className="text-sm md:text-base">
                Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
                perfect for quick and delicious meals. Our shrimp are carefully
                selected, peeled, and deveined to save you time in the kitchen.
                They're perfect for stir-fries, pasta dishes, salads, and more.
                Each shrimp is frozen at peak freshness to lock in flavor and
                nutrients.
              </p>
              <ul className="space-y-2 text-sm md:text-base pl-5 list-disc">
                <li>Fresh, never frozen (unless specified)</li>
                <li>Peeled and deveined for your convenience</li>
                <li>Perfect for grilling, sautéing, or baking</li>
                <li>Rich in protein and low in calories</li>
                <li>Sustainably sourced from trusted suppliers</li>
              </ul>
            </section>
          )}

          {/* ADDITIONAL */}
          {active === "additional" && (
            <section className="space-y-4 md:space-y-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900">
                Additional Information
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full rounded-lg md:rounded-3xl border border-gray-200 text-sm">
                  <tbody>
                    {[
                      ["Brand", "OceanFresh"],
                      ["Weight", "500g"],
                      ["Origin", "Imported"],
                      ["Storage", "Keep frozen at -18°C"],
                      ["Shelf Life", "12 months from production date"],
                      ["Ingredients", "Shrimp, water, salt"],
                      ["Allergens", "Crustacean shellfish"],
                      ["Net Weight", "500g"],
                      ["Packaging", "Vacuum sealed bag"],
                      ["Country of Origin", "Ecuador"],
                    ].map(([k, v]) => (
                      <tr key={k} className="even:bg-gray-50">
                        <th className="text-left p-3 w-1/3 md:w-48 bg-gray-50 md:bg-transparent font-medium">
                          {k}
                        </th>
                        <td className="p-3">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* REVIEW */}
          {active === "review" && (
            <section className="space-y-6 md:space-y-8">
              {/* Review List */}
              <div>
                <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                  Review list
                </h2>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-sm mb-4 gap-2 md:gap-0">
                  <p className="text-xs md:text-sm">
                    Showing 1 - {reviews.length} of 120 results
                  </p>
                  <select className="border rounded p-2 text-xs md:text-sm w-full md:w-auto">
                    <option>Newest</option>
                    <option>Oldest</option>
                    <option>Highest Rated</option>
                    <option>Lowest Rated</option>
                  </select>
                </div>
                <div className="space-y-4 md:space-y-6">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex gap-3 md:gap-4 p-3 md:p-0"
                    >
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                          <div>
                            <h3 className="font-semibold text-sm md:text-base">
                              {review.name}
                            </h3>
                            <div className="flex items-center gap-1 text-yellow-500 text-xs md:text-sm">
                              <Star size={14} className="fill-yellow-500" />
                              {review.rating}
                            </div>
                          </div>
                          <span className="text-gray-400 text-xs mt-1 md:mt-0">
                            {review.date}
                          </span>
                        </div>
                        <h4 className="font-medium text-sm md:text-base mt-1">
                          {review.title}
                        </h4>
                        <p className="text-gray-600 text-xs md:text-sm mt-1 line-clamp-3">
                          {review.text}
                        </p>
                        <button className="text-emerald-600 text-xs font-medium mt-2">
                          Read more
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Reviews Button for Mobile */}
                {isMobile && (
                  <button className="w-full mt-4 py-2 border border-emerald-500 text-emerald-600 rounded-lg font-medium">
                    Load More Reviews
                  </button>
                )}
              </div>

              {/* Add Review Form */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                <h2 className="font-semibold text-base md:text-lg mb-3 md:mb-4">
                  ADD A REVIEW
                </h2>
                <div className="mb-4">
                  <label className="font-medium text-xs md:text-sm block mb-2">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-1 md:gap-2">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <Star
                          key={index}
                          size={isMobile ? 20 : 24}
                          className={`cursor-pointer ${
                            ratingValue <= (hover || rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-300"
                          }`}
                          onClick={() => setRating(ratingValue)}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(0)}
                        />
                      );
                    })}
                  </div>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="col-span-2">
                    <label className="text-xs md:text-sm font-medium">
                      Title*
                    </label>
                    <input
                      type="text"
                      placeholder="Write short title.."
                      className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-xs md:text-sm font-medium">
                      Your detail review*
                    </label>
                    <textarea
                      placeholder="Write details here..."
                      className="w-full border rounded p-2 md:p-3 mt-1 h-24 md:h-28 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs md:text-sm font-medium">
                      First Name*
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs md:text-sm font-medium">
                      Email*
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border rounded p-2 md:p-3 mt-1 text-sm"
                    />
                  </div>
                  <div className="col-span-2 flex justify-between items-center mt-2">
                    <p className="text-xs text-gray-500">* Required fields</p>
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-5 md:px-6 py-2 md:py-2.5 rounded text-sm md:text-base font-medium"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </section>
          )}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
