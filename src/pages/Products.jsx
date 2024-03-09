import { useState } from "react";
import Header from "../components/Header";
import ProductCardsContainer from "../components/ProductCardsContainer";

const Products = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      {filteredProducts.length > 0 ? (
        <ProductCardsContainer products={filteredProducts} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Products;
