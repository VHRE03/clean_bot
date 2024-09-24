import { useEffect, useState } from "react";
import { getAllUsers, getLoginUser } from "../api/cleanBot.api";
import { UserTable } from "../components/UserTable";
import { useNavigate } from "react-router-dom";

import { AdminNavBar } from "../components/AdminUser/AdminNavBar";

export function AdminPage() {
  const [users, setUsers] = useState([]);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers();
      setUsers(res.data);
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
    loadLoginUser();
  }, []);

  // Función para crear un nuevo usuario
  const handleCreateUser = () => {
    navigate("/");
  };

  return (
    <div>
      <AdminNavBar />
      <div>
        <button onClick={handleCreateUser}>Nuevo usuario</button>
      </div>
      <UserTable users={users} />
    </div>
  );
}
