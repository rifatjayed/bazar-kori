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
  }, [active]);

  return (
    <div className="mx-auto px-4 py-10">
      <div className="rounded-2xl border border-gray-200  p-6 bg-white">
        {/* Tabs Header */}
        <div
          ref={containerRef}
          className="relative border-b border-gray-200 overflow-x-auto no-scrollbar"
          role="tablist"
          aria-label="Product details tabs"
        >
          <div className="flex min-w-max gap-8">
            {tabs.map((t) => (
              <button
                key={t.id}
                ref={(el) => (btnRefs.current[t.id] = el)}
                role="tab"
                aria-selected={active === t.id}
                aria-controls={`panel-${t.id}`}
                id={`tab-${t.id}`}
                onClick={() => setActive(t.id)}
                className={`relative py-4 text-sm tracking-wide whitespace-nowrap transition-colors hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-md ${
                  active === t.id
                    ? "text-gray-900 font-semibold"
                    : "text-gray-500"
                }`}
              >
                {t.label}
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
        <div className="pt-8 text-gray-700">
          {/* DESCRIPTION */}
          {active === "description" && (
            <section className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Description
              </h3>
              <p>
                Enjoy the convenience of Fresh Peeled and Deveined Shrimp,
                perfect for quick and delicious meals.
              </p>
            </section>
          )}

          {/* ADDITIONAL */}
          {active === "additional" && (
            <section className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Additional Information
              </h3>
              <table className="min-w-full rounded-3xl border border-gray-200 text-sm">
                <tbody>
                  {[
                    ["Brand", "OceanFresh"],
                    ["Weight", "500g"],
                    ["Origin", "Imported"],
                  ].map(([k, v]) => (
                    <tr key={k} className="even:bg-gray-50">
                      <th className="w-48 text-left p-3">{k}</th>
                      <td className="p-3">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}

          {/* REVIEW */}
          {active === "review" && (
            <section className="space-y-8">
              {/* Review List */}
              <div>
                <h2 className="font-semibold text-lg mb-4">Review list</h2>
                <div className="flex justify-between text-sm mb-4">
                  <p>Showing 1 - {reviews.length} of 120 results</p>
                  <select className="border rounded p-1">
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <div key={review.id} className="flex gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold">{review.name}</h3>
                            <div className="flex items-center gap-1 text-yellow-500 text-sm">
                              <Star size={16} className="fill-yellow-500" />
                              {review.rating}
                            </div>
                          </div>
                          <span className="text-gray-400 text-xs">
                            {review.date}
                          </span>
                        </div>
                        <h4 className="font-medium mt-1">{review.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {review.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Add Review Form */}
              <div>
                <h2 className="font-semibold text-lg mb-4">ADD A REVIEW</h2>
                <div className="mb-4">
                  <label className="font-medium text-sm block mb-2">
                    Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;
                      return (
                        <Star
                          key={index}
                          size={24}
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
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-sm font-medium">Title*</label>
                    <input
                      type="text"
                      placeholder="Write short title.."
                      className="w-full border rounded p-2 mt-1"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium">
                      Your detail review*
                    </label>
                    <textarea
                      placeholder="Write details here..."
                      className="w-full border rounded p-2 mt-1 h-28"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">First Name*</label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full border rounded p-2 mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email*</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full border rounded p-2 mt-1"
                    />
                  </div>
                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="bg-green-600 text-white px-6 py-2 rounded mt-2"
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
    </div>
  );
}
