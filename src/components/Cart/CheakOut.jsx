import React, { useState, useMemo } from "react";
import { useProducts } from "../context/ProductsProvider";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const Checkout = () => {
  // Context থেকে কার্টের ডেটা নেওয়া হচ্ছে
  const { cart } = useProducts();

  // ফর্ম ইনপুটগুলোর জন্য State
  const [billingDetails, setBillingDetails] = useState({
    fullName: "",
    district: "Dhaka",
    city: "",
    zip: "",
    streetAddress: "",
    apartment: "",
    phone: "",
    email: "",
    createAccount: false,
  });

  // সাবস্ক্রিপশন অর্ডারের জন্য State
  const [isSubscription, setIsSubscription] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  // ফর্মের ইনপুট পরিবর্তনের জন্য হ্যান্ডলার
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBillingDetails((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // সাবস্ক্রিপশনের দিন সিলেক্ট করার জন্য হ্যান্ডলার
  const handleDayToggle = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  // অর্ডার সামারির জন্য ক্যালকুলেশন
  const { subtotal } = useMemo(() => {
    return {
      subtotal: cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    };
  }, [cart]);

  const tax = subtotal * 0.1; // উদাহরণস্বরূপ 10% ট্যাক্স
  const total = subtotal + tax;

  const daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stepper: Checkout ধাপটি এখন Active */}
        <div className="flex items-center justify-center mb-12">
          {["Cart", "Checkout", "Payment process", "Order complete"].map(
            (step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index <= 1
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index <= 1 ? (
                      <FaCheckCircle />
                    ) : (
                      <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm font-semibold ${
                      index <= 1 ? "text-green-600" : "text-gray-500"
                    }`}
                  >
                    {step}
                  </p>
                </div>
                {index < 3 && (
                  <div
                    className={`flex-1 h-1 mx-4 ${
                      index < 1 ? "bg-green-600" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            )
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Form Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Returning Customer */}
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800">
                Returning Customer?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                For better experience and for use of a coupon please login first
              </p>
              <Link
                to="/login"
                className="text-green-600 font-semibold text-sm mt-2 inline-block hover:underline"
              >
                Click here to login
              </Link>
            </div>

            {/* Preferred Delivery Time */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-4">
                Preferred Delivery Time
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Choose Date & time which is convenient for you
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date*
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                    <option>7 Dec (Tomorrow)</option>
                    <option>8 Dec</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Time*
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500">
                    <option>11:00 AM - 01:00 PM</option>
                    <option>02:00 PM - 04:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Billing Details */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-6">Billing Details</h3>
              <div className="space-y-4">
                {/* Form Fields */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={billingDetails.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="district"
                      className="block text-sm font-medium text-gray-700"
                    >
                      District*
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={billingDetails.district}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    >
                      <option>Dhaka</option>
                      <option>Chittagong</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City*
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={billingDetails.city}
                      onChange={handleInputChange}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ZIP / Postcode*
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={billingDetails.zip}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="streetAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street address*
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    placeholder="House no & street name"
                    value={billingDetails.streetAddress}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="apartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Apartment, floor, etc. (optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    id="apartment"
                    value={billingDetails.apartment}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number*
                  </label>
                  <div className="flex mt-1">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                      +880
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      value={billingDetails.phone}
                      onChange={handleInputChange}
                      className="flex-1 block w-full rounded-none rounded-r-md border-gray-300"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={billingDetails.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div className="flex items-center">
                  <input
                    id="createAccount"
                    name="createAccount"
                    type="checkbox"
                    checked={billingDetails.createAccount}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-green-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="createAccount"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Create an account
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & Subscription */}
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.selectedWeight}`}
                    className="flex justify-between items-center text-sm"
                  >
                    <div className="text-gray-600">
                      <p>{item.name}</p>
                      <p className="text-xs">
                        {item.selectedWeight} x {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-gray-800">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <p>SUB-TOTAL ({cart.length} ITEMS)</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p>TAX</p>
                    <p className="font-medium">${tax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-gray-800 pt-2">
                    <p>TOTAL</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Proceed To Payment Process &rarr;
              </button>
            </div>

            {/* Subscription Order */}
            <div className="bg-gray-50 p-6 rounded-lg border">
              <div className="flex items-start">
                <input
                  id="subscription"
                  name="subscription"
                  type="checkbox"
                  checked={isSubscription}
                  onChange={(e) => setIsSubscription(e.target.checked)}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded mt-1"
                />
                <div className="ml-3">
                  <label
                    htmlFor="subscription"
                    className="font-semibold text-gray-900"
                  >
                    Subscription Order
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    The subscription plan allows customers to schedule recurring
                    purchases at consistent intervals, such as daily or weekly.
                  </p>
                </div>
              </div>
              {isSubscription && (
                <div className="mt-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Days*
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {daysOfWeek.map((day) => (
                        <button
                          key={day}
                          onClick={() => handleDayToggle(day)}
                          className={`py-2 px-1 text-xs rounded-md border ${
                            selectedDays.includes(day)
                              ? "bg-green-600 text-white border-green-600"
                              : "bg-white"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">
                      Weeks*
                    </label>
                    <select className="w-full border-gray-300 rounded-md shadow-sm">
                      <option>1 Week</option>
                      <option>2 Weeks</option>
                    </select>
                  </div>
                  <div className="mt-6 flex flex-col space-y-2">
                    <button className="w-full bg-green-600 text-white py-2 rounded-full font-semibold hover:bg-green-700">
                      Apply subscription
                    </button>
                    <button className="w-full bg-white text-gray-700 py-2 rounded-full font-semibold border hover:bg-gray-100">
                      Remove Subscription
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
