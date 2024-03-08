import "./App.css";
import Products from "./pages/Products";
import ProductCard from "./components/ProductCard";
import React, { useState, useEffect } from "react";
import ProductCardsContainer from "./components/ProductCardsContainer";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const FetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Greška:", error);
      }
    };

    FetchProducts();
  }, []);

  return (
    <>
      <Products products={products} />
    </>
  );
}

export default App;
