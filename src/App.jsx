import "./App.css";
import Products from "./pages/Products";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import ProductCardsContainer from "./components/ProductCardsContainer";

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <Products />
      <ProductCardsContainer products={products} />
    </>
  );
}

export default App;
