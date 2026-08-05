const variantStyles = {
  primary: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
  secondary: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",
  danger: "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600",
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm",

  md: "px-4 py-2 text-base",

  lg: "px-6 py-3 text-lg",
};

function Button({ children, variant, size, onClick }) {
  return (
    <button
      className={`${variantStyles[variant]} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
