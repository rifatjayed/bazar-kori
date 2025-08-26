import React from "react";
import Category from "../components/category/Category";
import DealsSection from "../components/DealsSection";
import Header from "../components/Header";
import ProductGrid from "../components/products/Products";
import Service from "../components/Service";
import ShopByBrands from "../components/brands/ShopByBrands";
import NewsletterSection from "../components/NewsletterSection/NewsletterSection";
import Recomand from "../components/recomand";
import Hero from "../components/hero/Hero";

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Category></Category>
      <Service></Service>
      {/* <ProductGrid></ProductGrid> */}

      <DealsSection></DealsSection>

      <Recomand></Recomand>
      <ShopByBrands></ShopByBrands>

      <NewsletterSection></NewsletterSection>
    </>
  );
};

export default Home;
