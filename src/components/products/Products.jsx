import ProductCard from "./ProductCard";
import Yougurt from "../../assets/yogurt.png";
import juice from "../../assets/juice.png";
import Flour from "../../assets/Flour.png";
import Penaut from "../../assets/peanutButter.png";
import { useProducts } from "../context/ProductsProvider";

export default function ProductGrid() {
  const { products } = useProducts(); //

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.slice(0, 4).map((item, i) => (
        <ProductCard key={i} {...item} />
      ))}
    </div>
  );
}

// import ProductCard from "./ProductCard";
// import { useProducts } from "../context/ProductsProvider";
// import { useMemo } from "react";

// export default function ProductGrid() {
//   const { products } = useProducts();

//   // Show more products on larger screens
//   const productsToShow = useMemo(() => {
//     const width = window.innerWidth;
//     if (width < 640) return products.slice(0, 2); // 2 on mobile
//     if (width < 768) return products.slice(0, 4); // 4 on sm
//     if (width < 1024) return products.slice(0, 6); // 6 on md
//     return products.slice(0, 8); // 8 on lg+
//   }, [products]);

//   return (
//     <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
//       {productsToShow.map((item) => (
//         <ProductCard key={item.id} {...item} />
//       ))}
//     </div>
//   );
// }
