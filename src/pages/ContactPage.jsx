// import React from "react";
// import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

// const ContactPage = () => {
//   return (
//     <div className="bg-white font-sans">
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <div className="mb-8 text-sm text-gray-500">
//           <span>Home</span>
//           <span className="mx-2">&gt;</span>
//           <span className="text-gray-800">Contact Us</span>
//         </div>

//         {/* ✅ Main Section Wrapper with Border */}
//         <div className="border border-gray-200 rounded-lg p-8 lg:p-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             {/* Left Side: Contact Form */}
//             <div className="space-y-6">
//               <h1 className="text-3xl font-bold text-gray-800">
//                 Send Message To Us
//               </h1>
//               <form action="#" method="POST" className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="full-name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Full Name<span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="full-name"
//                     id="full-name"
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="phone-number"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Phone Number<span className="text-red-500">*</span>
//                     </label>
//                     <div className="mt-1 flex rounded-md shadow-sm">
//                       <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">
//                         🇧🇩 +880
//                       </span>
//                       <input
//                         type="text"
//                         name="phone-number"
//                         id="phone-number"
//                         className="flex-1 block w-full rounded-none rounded-r-md px-4 py-3 border border-gray-300 focus:ring-green-500 focus:border-green-500"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Email<span className="text-red-500">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       id="email"
//                       className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="subject"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Subject<span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="subject"
//                     id="subject"
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Your Message<span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows={5}
//                     placeholder="Write your message here..."
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
//                   ></textarea>
//                 </div>

//                 <div>
//                   <button
//                     type="submit"
//                     className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
//                   >
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>

//             {/* Right Side: Image */}
//             <div className="hidden lg:block h-full">
//               <img
//                 className="rounded-lg object-cover w-full "
//                 src="https://images.pexels.com/photos/4392036/pexels-photo-4392036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 alt="Grocery delivery person smiling and talking on the phone"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section: Get In Touch */}
//         <div className="mt-20">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8">
//             Get In Touch
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Contact Item 1: Call Us */}
//             <div className="flex items-center space-x-5">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
//                   <FiPhone size={24} />
//                 </div>
//               </div>
//               {/* ✅ Text fixed to be on the same line */}
//               <div className="text-gray-600">
//                 <strong className="font-semibold text-gray-800">
//                   Call Us:
//                 </strong>{" "}
//                 +34 898 99 93 09
//               </div>
//             </div>

//             {/* Contact Item 2: Email */}
//             <div className="flex items-center space-x-5">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
//                   <FiMail size={24} />
//                 </div>
//               </div>
//               {/* ✅ Text fixed to be on the same line */}
//               <div className="text-gray-600">
//                 <strong className="font-semibold text-gray-800">Email:</strong>{" "}
//                 info@e-commerce.com
//               </div>
//             </div>

//             {/* Contact Item 3: Address */}
//             <div className="flex items-center space-x-5">
//               <div className="flex-shrink-0">
//                 <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
//                   <FiMapPin size={24} />
//                 </div>
//               </div>
//               {/* ✅ Text fixed to be on the same line */}
//               <div className="text-gray-600">
//                 <strong className="font-semibold text-gray-800">
//                   Address:
//                 </strong>{" "}
//                 Carrer Acuario, 14E, 17320 Tossa de Mar, Girona
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;

import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Service from "../components/Service";

import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import Breadcrumb from "../components/Breadcrumb";

const ContactPage = () => {
  const breadcrumbItems = [
    { label: "Home", path: "/" },
    { label: "Contact Us" },
  ];
  return (
    <>
      <div className="bg-white font-sans">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-gray-500">
            {/* <span>Home</span>
            <span className="mx-2">&gt;</span> */}
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Main Section Wrapper with Border */}
          <div className="border border-gray-200 rounded-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side: Contact Form */}
              <div className="space-y-6">
                <h1 className="text-3xl font-bold text-gray-800">
                  Send Message To Us
                </h1>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="full-name"
                      id="full-name"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number<span className="text-red-500">*</span>
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-600 text-sm">
                          🇧🇩 +880
                        </span>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="flex-1 block w-full rounded-none rounded-r-md px-4 py-3 border border-gray-300 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Your Message<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here..."
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-4xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Side: Image */}
              <div className="hidden lg:block h-full">
                <img
                  className="rounded-lg object-cover w-full h-[598px]"
                  src="https://images.pexels.com/photos/4392036/pexels-photo-4392036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Grocery delivery person smiling and talking on the phone"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section: Get In Touch */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact Item 1: Call Us */}
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
                    <FiPhone size={24} />
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong className="font-semibold text-gray-800">
                    Call Us:
                  </strong>{" "}
                  +34 898 99 93 09
                </div>
              </div>

              {/* Contact Item 2: Email */}
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
                    <FiMail size={24} />
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong className="font-semibold text-gray-800">
                    Email:
                  </strong>{" "}
                  info@e-commerce.com
                </div>
              </div>

              {/* Contact Item 3: Address */}
              <div className="flex items-center space-x-5">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-green-100 text-green-600">
                    <FiMapPin size={24} />
                  </div>
                </div>
                <div className="text-gray-600">
                  <strong className="font-semibold text-gray-800">
                    Address:
                  </strong>{" "}
                  Carrer Acuario, 14E, 17320 Tossa de Mar, Girona
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Service></Service>
        <NewsletterSection />
      </div>
    </>
  );
};

export default ContactPage;
