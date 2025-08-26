// import React from "react";
// import { Star } from "lucide-react";

// const ProductCard = ({
//   name,
//   image,
//   weight,
//   price,
//   oldPrice,
//   rating,
//   discount,
// }) => {
//   return (
//     <div className="border border-[#E2E5E1] rounded-2xl shadow-sm  w-full max-w-[237px] h-[428px] hover:shadow-md transition">
//       <div className="relative">
//         <img
//           src={image}
//           alt={name}
//           className="rounded-xl w-full h-[200px] object-cover"
//         />
//         {discount && (
//           <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
//             -{discount}%
//           </div>
//         )}
//       </div>
//       <div className="mt-3 space-y-1 p-[16px] flex flex-col justify-between">
//         <h3 className="font-semibold text-sm">{name}</h3>

//         <div className=" items-end">
//           <p className="text-xs text-gray-500">{weight}</p>
//           <div className="flex items-center text-yellow-500 text-sm">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 size={16}
//                 fill={i < rating ? "currentColor" : "none"}
//               />
//             ))}
//             <span className="text-gray-400 text-xs ml-1">({rating * 20})</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-lg font-bold">${price.toFixed(2)}</span>
//             <span className="text-sm line-through text-gray-400">
//               ${oldPrice.toFixed(2)}
//             </span>
//           </div>
//           <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm">
//             🛒 Add to Cart
//           </button>
//         </div>
//       </div>
//
//     </div>
//   );
// };

// export default ProductCard;

import React from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  images,
  weightOptions,
  price,
  oldPrice,
  rating,
  discount,
}) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="border border-[#E2E5E1] rounded-2xl shadow-sm w-full max-w-[237px] h-[428px] hover:shadow-md transition flex flex-col justify-between">
        {/* Image & Discount Badge */}
        <div className="relative">
          <img
            src={images.main}
            alt={name}
            className="rounded-t-2xl w-full h-[200px] object-cover"
          />
          {discount && (
            <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </div>
          )}
        </div>

        {/* Text & Info Section */}
        <div className="flex flex-col justify-between h-full p-4">
          {/* Product Name */}
          <h3 className="font-semibold text-sm mb-2">{name}</h3>

          {/* Bottom Info Block */}
          <div className="mt-auto space-y-1">
            <p className="text-xs text-gray-500">{weightOptions}</p>

            <div className="flex items-center text-yellow-500 text-sm">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < rating ? "currentColor" : "none"}
                />
              ))}
              <span className="text-gray-400 text-xs ml-1">
                ({rating * 20})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">${price}</span>
              <span className="text-sm line-through text-gray-400">
                ${oldPrice}
              </span>
            </div>

            <button className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
