import { useEffect, useState } from "react";
import { getAllUsers } from "../api/cleanBot.api";
import { UserTable } from "../components/UserTable";
import { useNavigate } from "react-router-dom";

export function AdminPage() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers();
      setUsers(res.data);
      console.log(res.data);
    }
    loadUsers();
  }, []);

  // Función para crear un nuevo usuario
  const handleCreateUser = () => {
    navigate("/");
  };

  return (
    <div>
      <div>
        <button onClick={handleCreateUser}>Nuevo usuario</button>
      </div>
      <UserTable users={users} />
    </div>
  );
}
