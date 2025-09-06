// import { Edit, Trash2 } from "lucide-react";

// export default function AddressCard({
//   type,
//   name,
//   street,
//   city,
//   district,
//   zip,
//   phone,
//   email,
// }) {
//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-all">
//       <h3 className="text-sm font-semibold text-green-600 mb-2">{type}</h3>
//       <p className="text-gray-800 font-medium">{name}</p>
//       <p className="text-gray-600 text-sm">{street}</p>
//       <p className="text-gray-600 text-sm">
//         {city}, {district}
//       </p>
//       <p className="text-gray-600 text-sm">ZIP: {zip}</p>
//       <p className="text-gray-600 text-sm">Phone: {phone}</p>
//       <p className="text-gray-600 text-sm">Email: {email}</p>

//       <div className="flex items-center gap-4 mt-4">
//         <button className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm font-medium">
//           <Edit size={16} /> Edit
//         </button>
//         <button className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm font-medium">
//           <Trash2 size={16} /> Delete
//         </button>
//       </div>
//     </div>
//   );
// }

import { Edit, Trash2, Plus } from "lucide-react";

export default function AddressCard({
  type,
  name,
  street,
  city,
  district,
  zip,
  phone,
  email,
}) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white">
      <h3 className="font-semibold text-gray-800 mb-2">{type}</h3>
      <p className="text-sm text-gray-700">{name}</p>
      <p className="text-sm text-gray-700">{street}</p>
      <p className="text-sm text-gray-700">City: {city}</p>
      <p className="text-sm text-gray-700">District: {district}</p>
      <p className="text-sm text-gray-700">ZIP / Postcode: {zip}</p>
      <p className="text-sm text-gray-700">Phone: {phone}</p>
      <p className="text-sm text-gray-700">Email: {email}</p>

      <div className="flex gap-4 mt-3">
        <button className="flex items-center gap-1 text-green-600 text-sm font-medium hover:underline">
          <Edit size={15} /> Edit Address
        </button>
        <button className="flex items-center gap-1 text-red-500 text-sm font-medium hover:underline">
          <Trash2 size={15} /> Delete
        </button>
      </div>
    </div>
  );
}
