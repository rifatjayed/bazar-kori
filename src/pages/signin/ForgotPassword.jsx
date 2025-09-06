import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // এখানে API কল দিতে পারো
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Forgot your password?
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Please enter your email address, we will send a verification code
          there.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-3">
            <button
              type="button"
              className="flex-1 border border-green-600 text-green-600 py-2 rounded-full hover:bg-green-50 transition"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
