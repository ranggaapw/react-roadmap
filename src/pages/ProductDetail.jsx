import useProduct from "../hooks/useProduct";

function ProductDetail() {
  const { product, isLoading, error } = useProduct();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Gagal mengambil data.</h1>;
  }

  if (!product) {
    return (
      <div className="p-4  bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold justify-center flex items-center">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="p-4  bg-gray-100 rounded-lg shadow-lg">
      <h1>Product Detail: {product?.title}</h1>
      <p>Product Description: {product.description}</p>
    </div>
  );
}
export default ProductDetail;
