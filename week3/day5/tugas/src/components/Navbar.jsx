import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  if (location.pathname === "/") return null;

  return (
    <nav className="bg-green-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <div
        onClick={() => navigate("/home")}
        className="font-extrabold text-xl cursor-pointer tracking-wide"
      >
        Nova Shop
      </div>

      {isAuthenticated && (
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              to="/home"
              className={`hover:text-green-100 transition ${
                location.pathname === "/home" ? "font-semibold underline" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`hover:text-green-100 transition ${
                location.pathname.startsWith("/products")
                  ? "font-semibold underline"
                  : ""
              }`}
            >
              Produk
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="bg-white text-green-700 px-4 py-1.5 rounded-md font-semibold hover:bg-green-50 transition"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
