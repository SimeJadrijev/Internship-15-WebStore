import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCardsContainer from "../components/ProductCardsContainer";
import { useNavigate, useLocation } from "react-router-dom";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTermFromQuery = searchParams.get("search") || "";

  const [searchTerm, setSearchTerm] = useState(searchTermFromQuery);

  useEffect(() => {
    searchParams.set("search", searchTerm);
    navigate(`?${searchParams.toString()}`);
  }, [searchTerm, navigate, searchParams]);

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <Header onSearchChange={handleSearchChange} />
      <ProductCardsContainer products={filteredProducts} />
    </>
  );
};

export default Products;
