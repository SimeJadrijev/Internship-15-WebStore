import "./App.css";
import Products from "./pages/Products";
import ProductCard from "./components/ProductCard";
import SingleProduct from "./components/SingleProduct";
import React, { useState, useEffect } from "react";
import ProductCardsContainer from "./components/ProductCardsContainer";

function App() {
  // const [product, setProduct] = useState(null);
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://fakestoreapi.com/products/4");
  //       const data = await response.json();
  //       setProduct(data);
  //     } catch (error) {
  //       console.error("Greška:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Products products={products} />
      {/* {product ? <SingleProduct product={product} /> : <p>Loading...</p>} */}
    </>
  );
}

export default App;
