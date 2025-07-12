// import PromoBanner from "./PromoBanner";
// import CategoryTabs from "./CategoryTabs";
// import ProductGrid from "./ProductGrid";

import CategoryTabs from "./CategoryTabs";
import ProductGrid from "./products/Products";
import PromoBanner from "./PromoBanner";

export default function DealsSection() {
  return (
    <section className="px-20  mx-auto">
      <h2 className="text-2xl font-bold mb-4">Weekday Deals</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left banner */}
        <div className="w-full lg:w-1/4">
          <PromoBanner />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-3/4">
          <CategoryTabs onSelect={(cat) => console.log(cat)} />
          <ProductGrid />
        </div>
      </div>
    </section>
  );
}
