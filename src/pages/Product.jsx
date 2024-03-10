import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import { useEffect, useState } from "react";
import Header from "../components/Header";

const Product = ({ onSearchChange }) => {
  const { id } = useParams(); // Dobijanje id-a proizvoda iz rute
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct();
  }, [id]); // Dodavanje id-a u niz zavisnosti

  return (
    <>
      <Header onSearchChange={onSearchChange} />
      {product ? <SingleProduct product={product} /> : <p>Loading...</p>}
    </>
  );
};
export default Product;
