import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/product/ProductCard";

function Products() {
  const { products, isLoading, error } = useProducts();

  const navigate = useNavigate();

  const handleClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Gagal mengambil data.</h1>;
  }

  return (
    <div className="grid grid-cols-5 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetail={() => handleClick(product.id)}
        />
      ))}
    </div>
  );
}
export default Products;
