function Card({ children, className }) {
  return (
    <div
      className={`border border-gray-300 rounded-lg shadow-sm hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}
export default Card;
