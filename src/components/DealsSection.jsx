import CategoryTabs from "./CategoryTabs";
import ProductGrid from "./products/Products";
import PromoBanner from "./PromoBanner";

export default function DealsSection() {
  return (
    // <section className="px-20  mx-auto mt-[80px]">
    //   <h4 className="text-[#515751] text-sm font-medium">FIND YOUR deals</h4>
    //   <h2 className="text-2xl font-bold mb-4">Weekday Deals</h2>
    //   <div className="flex flex-col lg:flex-row gap-6">
    //     {/* Left banner */}
    //     <div className="w-full lg:w-1/4">
    //       <PromoBanner />
    //     </div>

    //     {/* Right content */}
    //     <div className="w-full lg:w-3/4">
    //       <CategoryTabs onSelect={(cat) => console.log(cat)} />
    //       <ProductGrid />
    //     </div>
    //   </div>
    // </section>
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
      <h4 className="text-[#515751] text-xs sm:text-sm font-medium">
        FIND YOUR deals
      </h4>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
        Weekday Deals
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
        {/* Left banner - Hidden on small/medium screens, visible on large screens */}
        <div className="hidden lg:block w-full lg:w-1/4">
          <PromoBanner />
        </div>

        {/* Right content - Full width on small/medium screens, 3/4 on large screens */}
        <div className="w-full lg:w-3/4">
          <CategoryTabs onSelect={(cat) => console.log(cat)} />
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}

// import CategoryTabs from "./CategoryTabs";
// import ProductGrid from "./products/Products";
// import PromoBanner from "./PromoBanner";

// export default function DealsSection() {
//   return (
//     <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
//       <h4 className="text-[#515751] text-xs sm:text-sm font-medium">
//         FIND YOUR deals
//       </h4>
//       <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
//         Weekday Deals
//       </h2>
//       <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
//         {/* Left banner */}
//         <div className="w-full lg:w-1/4">
//           <PromoBanner />
//         </div>

//         {/* Right content */}
//         <div className="w-full lg:w-3/4">
//           <CategoryTabs onSelect={(cat) => console.log(cat)} />
//           <ProductGrid />
//         </div>
//       </div>
//     </section>
//   );
// }
