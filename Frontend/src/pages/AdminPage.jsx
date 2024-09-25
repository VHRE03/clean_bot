import { useEffect, useState } from "react";
import { getAllUsers, getLoginUser } from "../api/cleanBot.api";
import { fetchAllProducts } from "../api/products.api";
import { useNavigate } from "react-router-dom";
import { UserTable } from "../components/UserTable";
import { AdminNavBar } from "../components/AdminUser/AdminNavBar";
import { ProductsTable } from "../components/AdminUser/ProductsTable";

export function AdminPage() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState(null);
  const [selectedOption, setSelectedOption] = useState("users");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers();
      setUsers(res.data);
    }

    async function loadProducts() {
      const response = await fetchAllProducts();
      setProducts(response.data);
    }

    async function loadLoginUser() {
      const token = localStorage.getItem("token");
      if (token) {
        // Verifica si el token existe
        try {
          const response = await getLoginUser(token);
          setUserData(response.data);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      } else {
        console.log("No se encontró el token");
      }
    }

    loadUsers();
    loadProducts();
    loadLoginUser();
  }, []);

  // Función para crear un nuevo usuario
  const handleCreateUser = () => {
    navigate("/");
  };

  const handleNavOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <AdminNavBar userData={userData} onOptionChange={handleNavOptionChange} />
      <div>
        <button onClick={handleCreateUser}>Nuevo usuario</button>
      </div>
      {selectedOption === "users" && <UserTable users={users} />}
      {selectedOption === "products" && <ProductsTable products={products} />}
    </div>
  );
}
