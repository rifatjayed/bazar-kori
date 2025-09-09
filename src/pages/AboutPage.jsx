import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // For the green checkmarks
import aboutImg from "../assets/about (1).png";
import aboutImg2 from "../assets/about (2).png";
import aboutImg3 from "../assets/about (3).png";
const AboutPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Section 1: About Grocerious */}
      <section className="bg-green-100 py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-3/5 text-left">
            <h4 className="text-green-600 font-semibold mb-2 uppercase text-sm tracking-wide">
              About Grocerious
            </h4>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6">
              Fresh Choices, Better Living – <br />
              Your Trusted Partner For All <br />
              Things Grocery!
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              At Grocerious, we believe in bringing freshness, convenience, and
              quality right to your doorstep. Our mission is to provide you with
              a wide range of premium groceries, carefully curated to meet your
              daily needs while exceeding your expectations. From farm-fresh
              produce to pantry essentials, we are committed to ensuring that
              every product we deliver contributes to a healthier and happier
              lifestyle for you and your family.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 text-lg">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                Freshness Guarantee – 99% Customer Satisfaction
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                Wide Selection – 10,000+ Products
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                Trusted by Thousands – 50,000+ Happy Customers
              </li>
              <li className="flex items-center text-gray-700 text-lg">
                <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                Inventory Replenishment – 24/7 Stock Updates
              </li>
            </ul>
          </div>
          <div className="lg:w-2/5">
            {/* Placeholder Image for Delivery Guy */}
            <img
              src={aboutImg2}
              alt="Delivery Guy with groceries"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Our Mission */}
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            {/* Placeholder Image for Team */}
            <img
              src={aboutImg}
              alt="Team working together"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-left order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To revolutionize the grocery shopping experience by providing
              fresh, high-quality products, exceptional convenience, and
              unparalleled value. We envision fostering a sustainable lifestyle
              that brings families closer to healthier, more sustainable
              lifestyles. By leveraging innovation and a customer-first
              approach, we plan to set new standards for how groceries are
              sourced, delivered, and enjoyed, creating a positive impact on
              both people and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Our Vision */}
      <section className="bg-pink-100 py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              To deliver the freshest groceries with unmatched quality and
              convenience while empowering communities through sustainable and
              responsible practices. We are committed to building lasting
              relationships with our customers, suppliers, and partners by
              embracing transparency, and innovation. Through our dedication to
              excellence, we strive to simplify lives, enhance well-being, and
              contribute to a greener, more connected world.
            </p>
          </div>
          <div className="lg:w-1/2">
            {/* Placeholder Image for Happy Customer */}
            <img
              src={aboutImg3}
              alt="Happy customer enjoying groceries"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
