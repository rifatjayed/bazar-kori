import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInForm = () => {
  // State to manage password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    alert("Check the console for form data!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans py-[80px]">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign in</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 text-green-600"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/forgotPassword"
              className="text-sm text-green-600 hover:underline font-semibold"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-green-600 hover:underline font-bold">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInForm;
