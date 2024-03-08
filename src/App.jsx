import "./App.css";
import Products from "./pages/Products";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/20")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <>
      <Products />
      {product && <ProductCard product={product} />}
    </>
  );
}

export default App;
