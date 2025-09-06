import AddressCard from "./AddressCard";
import { Plus } from "lucide-react";

export default function AddressPage() {
  return (
    // <div className="p-6">
    //   <div className="flex justify-between items-center mb-6">
    //     <div>
    //       <h2 className="text-xl font-semibold text-gray-800">Addresses</h2>
    //       <p className="text-sm text-gray-500">
    //         The checkout page will automatically use the following addresses as
    //         the default.
    //       </p>
    //     </div>
    //     <div className="flex gap-3">
    //       <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
    //         <Plus size={18} /> Add Billing Address
    //       </button>
    //       <button className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-xl hover:bg-green-200 transition">
    //         <Plus size={18} /> Add Shipping Address
    //       </button>
    //     </div>
    //   </div>

    //   {/* Grid Layout */}
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //     <AddressCard
    //       type="Billing Address"
    //       name="John Doe"
    //       street="25/A Dhanmondi, Flat B4 3rd Floor"
    //       city="Dhanmondi"
    //       district="Dhaka"
    //       zip="1209"
    //       phone="+880 1711 234567"
    //       email="johndoe@example.com"
    //     />
    //     <AddressCard
    //       type="Shipping Address"
    //       name="John Doe"
    //       street="25/A Gulshan, Flat A2"
    //       city="Gulshan"
    //       district="Dhaka"
    //       zip="1220"
    //       phone="+880 1711 234567"
    //       email="johndoe@example.com"
    //     />
    //     <AddressCard
    //       type="Shipping Address"
    //       name="John Doe"
    //       street="25/A Uttara, Flat B3"
    //       city="Uttara"
    //       district="Dhaka"
    //       zip="1215"
    //       phone="+880 1711 234567"
    //       email="johndoe@example.com"
    //     />
    //   </div>
    // </div>
    <div className="px-[32px] py-[20px] shadow-sm">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 uppercase">
        ADDRESSES
      </h2>
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-sm text-gray-500">
            The checkout page will automatically use the following addresses as
            the default.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 border-green-600 text-green-600 px-6 py-2 border rounded-full text-sm font-medium hover:bg-green-50 whitespace-nowrap">
            <Plus size={16} /> Add Billing Address
          </button>
          <button className="flex items-center gap-2 border-green-600 text-green-600 px-6 py-2 border rounded-full text-sm font-medium hover:bg-green-50 whitespace-nowrap">
            <Plus size={16} /> Add Shipping Address
          </button>
        </div>
      </div>

      {/* Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AddressCard
          type="Billing Address"
          name="John Doe"
          street="25/A Dhanmondi, Flat B4 3rd Floor"
          city="Dhanmondi"
          district="Dhaka"
          zip="1209"
          phone="+880 1711 234567"
          email="johndoe@example.com"
        />
        <AddressCard
          type="Shipping Address"
          name="John Doe"
          street="25/A Gulshan, Flat A2"
          city="Gulshan"
          district="Dhaka"
          zip="1220"
          phone="+880 1711 234567"
          email="johndoe@example.com"
        />
        <AddressCard
          type="Shipping Address"
          name="John Doe"
          street="25/A Uttara, Flat B3"
          city="Uttara"
          district="Dhaka"
          zip="1215"
          phone="+880 1711 234567"
          email="johndoe@example.com"
        />
      </div>
    </div>
  );
}
