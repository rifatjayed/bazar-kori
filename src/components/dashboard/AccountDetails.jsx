// import React from "react";

// const AccountDetails = () => {
//   return (
//     <div>
//       <h2>225</h2>
//     </div>
//   );
// };

// export default AccountDetails;

import React, { useState } from "react";

const AccountDetails = () => {
  const [userData, setUserData] = useState({
    fullName: "John Doe",
    email: "Johndoe3434@gmail.com",
    phoneNumber: "17856585558",
    gender: "Male",
  });

  const [profileImage, setProfileImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Updated data:", userData);
    alert("Changes updated successfully!");
  };

  return (
    <div className="min-h-screen  ">
      <div className=" mx-auto bg-white px-[32px] py-[20px] rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">
          ACCOUNT DETAILS
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Picture Section */}
          <div className="flex items-center justify-between">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center border-2 border-gray-300">
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-gray-500">JD</span>
                )}
              </div>
            </div>
            {/* <div className="flex items-center gap-2">
              <label className="cursor-pointer">
                <span className="px-4 py-2 border-[#363A35]  rounded-full text-sm hover:bg-blue-600 transition-colors">
                  Upload Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="px-4 py-2 border-[#363A35]  rounded-full text-sm hover:bg-red-600 transition-colors"
              >
                Remove
              </button>
            </div> */}
            <div className="flex items-center gap-2">
              <label className="cursor-pointer">
                <span className="px-4 py-2 border border-gray-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-colors">
                  Upload Image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
              <button
                type="button"
                onClick={handleRemoveImage}
                className="px-4 py-2 border border-gray-600 rounded-full text-sm hover:bg-red-600 hover:text-white transition-colors"
              >
                Remove
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            {/* Full Name - Full Width Row */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={userData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email - Full Width Row */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Phone Number and Gender in Two Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex">
                  <select className="px-4 py-2 border border-gray-300 rounded-l-md bg-gray-100 focus:ring-2 focus:ring-blue-500">
                    <option>+880</option>
                    <option>+1</option>
                    <option>+44</option>
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="17856585558"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={userData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
          {/* Update Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors font-medium"
            >
              Update Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetails;
