import Card from "../ui/Card";
import Button from "../ui/Button";

function ProductCard({ product, onViewDetail }) {
  return (
    <Card className="flex flex-col items-center p-4">
      <img
        className="w-full h-48 object-contain"
        src={product.thumbnail}
        alt={product.title}
      />

      <h2 className="text-xl font-semibold">{product.title}</h2>

      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>

      <Button variant="primary" size="md" onClick={onViewDetail}>
        View Details
      </Button>
    </Card>
  );
}
export default ProductCard;
