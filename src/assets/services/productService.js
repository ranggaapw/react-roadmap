export async function getProducts() {
  const response = await fetch(import.meta.env.VITE_API_URL + "/products");

  return response.json();
}

export async function getProductById(id) {
  const response = await fetch(
    import.meta.env.VITE_API_URL + "/products/" + id,
  );
  return response.json();
}
