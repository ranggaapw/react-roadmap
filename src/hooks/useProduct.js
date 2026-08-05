import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function useProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/products/" + id)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return { product, isLoading, error };
}

export default useProduct;
