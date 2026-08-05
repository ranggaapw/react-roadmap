import { useState } from "react";
import { useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
}

export default useProducts;
