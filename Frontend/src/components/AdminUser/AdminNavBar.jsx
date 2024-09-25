import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function AdminNavBar({ userData, onOptionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-300">
          CleanBot
        </a>
      </div>
      <ul className="flex space-x-6 items-center">
        {/* Botón para mostrar productos */}
        <li>
          <button
            className="hover:text-gray-300"
            onClick={() => onOptionChange("products")}
          >
            Productos
          </button>
        </li>
        {/* Botón para mostrar usuarios */}
        <li>
          <button
            className="hover:text-gray-300"
            onClick={() => onOptionChange("users")}
          >
            Usuarios
          </button>
        </li>
        <li className="relative" ref={menuRef}>
          <button
            className="flex items-center hover:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {userData ? userData.username : "Usuario"}{" "}
            <span className="ml-2">▼</span>
          </button>
          {isMenuOpen && (
            <ul className="absolute right-0 w-40 mt-2 bg-gray-700 rounded shadow-lg">
              <li>
                <button
                  onClick={() => {
                    navigate("/edit-profile");
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-left hover:bg-gray-600 w-full"
                >
                  Editar Perfil
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 text-left hover:bg-gray-600 w-full"
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
