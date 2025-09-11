// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

// const SignUpForm = () => {
//   // State to manage password visibility
//   const [showPassword, setShowPassword] = useState(false);

//   // State to manage form data (can be expanded later)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     agreed: true,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form data submitted:", formData);
//     alert("Check the console for form data!");
//   };

//   return (
//     <div className=" min-h-screen flex items-center justify-center font-sans py-[80px]">
//       <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign up</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Name Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="name"
//             >
//               Name<span className="text-red-500">*</span>
//             </label>
//             <input
//               className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="email"
//             >
//               Email<span className="text-red-500">*</span>
//             </label>
//             <input
//               className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
//               id="email"
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="password"
//             >
//               Password<span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500">
//               Must be at least 8 characters.
//             </p>
//           </div>

//           {/* Terms and Conditions Checkbox */}
//           <div className="flex items-start mb-6">
//             <div className="flex items-center h-5">
//               <input
//                 id="terms"
//                 name="agreed"
//                 type="checkbox"
//                 checked={formData.agreed}
//                 onChange={handleChange}
//                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 text-green-600"
//                 required
//               />
//             </div>
//             <label
//               htmlFor="terms"
//               className="ml-2 text-sm font-medium text-gray-700"
//             >
//               Are you agree to Grocerious{" "}
//               <a
//                 href="#"
//                 className="text-green-600 hover:underline font-semibold"
//               >
//                 Terms of Condition
//               </a>{" "}
//               and{" "}
//               <a
//                 href="#"
//                 className="text-green-600 hover:underline font-semibold"
//               >
//                 Privacy Policy
//               </a>
//               .
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
//             type="submit"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Login Link */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have an account?{" "}
//           <a href="#" className="text-green-600 hover:underline font-bold">
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

// import React, { useState } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// const SignUpForm = () => {
//   // State to manage password visibility
//   const [showPassword, setShowPassword] = useState(false);

//   // State to manage form data (can be expanded later)
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     agreed: true,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form data submitted:", formData);
//     alert("Check the console for form data!");
//   };

//   const handleGoogleSignUp = () => {
//     // Handle Google sign up logic here
//     console.log("Sign up with Google clicked");
//     alert("Google sign up clicked!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center font-sans py-[80px]">
//       <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign up</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Name Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="name"
//             >
//               Name<span className="text-red-500">*</span>
//             </label>
//             <input
//               className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="email"
//             >
//               Email<span className="text-red-500">*</span>
//             </label>
//             <input
//               className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
//               id="email"
//               type="email"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-semibold mb-2"
//               htmlFor="password"
//             >
//               Password<span className="text-red-500">*</span>
//             </label>
//             <div className="relative">
//               <input
//                 className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 onChange={handleChange}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
//               >
//                 {showPassword ? <FaEyeSlash /> : <FaEye />}
//               </button>
//             </div>
//             <p className="text-xs text-gray-500">
//               Must be at least 8 characters.
//             </p>
//           </div>

//           {/* Terms and Conditions Checkbox */}
//           <div className="flex items-start mb-6">
//             <div className="flex items-center h-5">
//               <input
//                 id="terms"
//                 name="agreed"
//                 type="checkbox"
//                 checked={formData.agreed}
//                 onChange={handleChange}
//                 className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 text-green-600"
//                 required
//               />
//             </div>
//             <label
//               htmlFor="terms"
//               className="ml-2 text-sm font-medium text-gray-700"
//             >
//               Are you agree to Grocerious{" "}
//               <a
//                 href="#"
//                 className="text-green-600 hover:underline font-semibold"
//               >
//                 Terms of Condition
//               </a>{" "}
//               and{" "}
//               <a
//                 href="#"
//                 className="text-green-600 hover:underline font-semibold"
//               >
//                 Privacy Policy
//               </a>
//               .
//             </label>
//           </div>

//           {/* Submit Button */}
//           <button
//             className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
//             type="submit"
//           >
//             Sign Up
//           </button>
//         </form>

//         {/* Divider */}
//         <div className="flex items-center my-6">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google Sign Up Button */}
//         <button
//           onClick={handleGoogleSignUp}
//           className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
//         >
//           <FcGoogle className="text-xl" />
//           Sign up with Google
//         </button>

//         {/* Login Link */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Already have an account?{" "}
//           <a href="#" className="text-green-600 hover:underline font-bold">
//             Log in
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

// ✅ Firebase imports
import { auth, googleProvider } from "../../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreed: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Handle Email/Password Signup
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   await createUserWithEmailAndPassword(
    //     auth,
    //     formData.email,
    //     formData.password
    //   );
    //   alert("✅ Account created successfully!");
    //   console.log("User created:", formData.email);
    // } catch (error) {
    //   console.error("Signup Error:", error.message);
    //   alert(error.message);
    // }

    try {
      // 🔹 Create user with email & password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 🔹 Update profile with Name
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });

      alert("✅ Account created successfully!");
      console.log("User created:", userCredential.user);

      navigate("/"); // 👈 SignUp এর পরে Home এ redirect করো
    } catch (error) {
      console.error("Signup Error:", error.message);
      alert(error.message);
    }
  };

  // ✅ Handle Google Signup
  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("✅ Signed up with Google!");
    } catch (error) {
      console.error("Google Signup Error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans py-[80px]">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              className="shadow-sm appearance-none border border-[#E2E5E1] rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-400"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              required
            />
          </div>

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
            <p className="text-xs text-gray-500">
              Must be at least 8 characters.
            </p>
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="agreed"
                type="checkbox"
                checked={formData.agreed}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 text-green-600"
                required
              />
            </div>
            <label
              htmlFor="terms"
              className="ml-2 text-sm font-medium text-gray-700"
            >
              Are you agree to Grocerious{" "}
              <a
                href="#"
                className="text-green-600 hover:underline font-semibold"
              >
                Terms of Condition
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-green-600 hover:underline font-semibold"
              >
                Privacy Policy
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Sign Up Button */}
        <button
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
        >
          <FcGoogle className="text-xl" />
          Sign up with Google
        </button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-green-600 hover:underline font-bold"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
