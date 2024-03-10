import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { assertNewExpression } from "@babel/types";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const FetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    FetchProduct();
  }, [id]);

  return (
    <>
      {/* <Header onSearchChange={handleSearchChange} /> */}
      {product ? <SingleProduct product={product} /> : <p>Loading...</p>}
    </>
  );
};
export default Product;
