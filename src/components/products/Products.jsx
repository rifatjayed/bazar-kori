// import ProductCard from "./ProductCard";

import ProductCard from "./ProductCard";
import Yougurt from "../../assets/yogurt.png";
import juice from "../../assets/juice.png";
import Flour from "../../assets/Flour.png";
import Penaut from "../../assets/peanutButter.png";

const products = [
  {
    name: "creamy texture Greek Yogurt with protein",
    image: Yougurt,
    weight: "15 oz",
    price: 4.29,
    oldPrice: 5.69,
    rating: 4,
    discount: 33,
  },
  {
    name: "Fresh Papaya Juice",
    image: juice,
    weight: "250 ml",
    price: 2.0,
    oldPrice: 3.0,
    rating: 3,
    discount: 30,
  },
  {
    name: "Pillsbury Fresh Almond Flour",
    image: Flour,
    weight: "500 gm",
    price: 3.0,
    oldPrice: 4.49,
    rating: 4,
    discount: 33,
  },
  {
    name: "Natural Peanut Butter",
    image: Penaut,
    weight: "18 oz",
    price: 4.29,
    oldPrice: 5.49,
    rating: 5,
    discount: 20,
  },
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item, i) => (
        <ProductCard key={i} {...item} />
      ))}
         
    </div>
  );
}
