import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function AdminNavBar({ userData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Lógica para cerrar sesión, como eliminar el token del localStorage
    localStorage.removeItem("token");
    navigate("/login"); // Redirige a la página de login
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Cierra el menú si se hace clic fuera de él
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside); // Escucha clics en el documento
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpia el evento al desmontar
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
        <li>
          <a href="/" className="hover:text-gray-300">
            Productos
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-300">
            Usuarios
          </a>
        </li>
        <li className="relative" ref={menuRef}>
          <button
            className="flex items-center hover:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Alterna el estado del menú
          >
            {userData ? userData.username : "Usuario"}{" "}
            {/* Muestra el nombre del usuario */}
            <span className="ml-2">▼</span> {/* Icono de menú desplegable */}
          </button>
          {isMenuOpen && (
            <ul className="absolute right-0 w-40 mt-2 bg-gray-700 rounded shadow-lg">
              <li>
                <button
                  onClick={() => {
                    navigate("/edit-profile");
                    setIsMenuOpen(false); // Cierra el menú después de hacer clic
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
                    setIsMenuOpen(false); // Cierra el menú después de hacer clic
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
