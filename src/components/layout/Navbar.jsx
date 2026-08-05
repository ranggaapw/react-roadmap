import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 border-b border-border bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-primary cursor-pointer">
          BlueMart
        </h1>

        <ul className="flex justify-center gap-4 text-lg font-medium text-primary">
          <li className="px-3 py-2 rounded-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="px-3 py-2 rounded-lg">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li className="px-3 py-2 rounded-lg">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`
              }
            >
              Cart
            </NavLink>
          </li>
          <li className="px-3 py-2 rounded-lg">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`
              }
            >
              Profile
            </NavLink>
          </li>
          <li className="px-3 py-2 rounded-lg">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary-soft text-primary font-semibold"
                    : "text-text-secondary hover:text-primary"
                }`
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
