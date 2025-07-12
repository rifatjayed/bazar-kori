import Category from "./components/category/Category";
import DealsSection from "./components/DealsSection";
import Header from "./components/Header";
import ProductGrid from "./components/products/Products";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Header></Header>
      <Category></Category>
      <Service></Service>
      {/* <ProductGrid></ProductGrid> */}
      <DealsSection></DealsSection>
    </>
  );
}

export default App;
