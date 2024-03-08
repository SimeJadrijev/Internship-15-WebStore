import Header from "../components/Header";
import ProductCardsContainer from "../components/ProductCardsContainer";

const Products = ({ products }) => {
  return (
    <>
      <Header />
      {products ? (
        <ProductCardsContainer products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Products;
