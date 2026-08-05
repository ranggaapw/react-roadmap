function ProductList() {
  const product = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
  ];

  return (
    <ul>
      <li>
        {product.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </li>
    </ul>
  );
}

export default ProductList;
