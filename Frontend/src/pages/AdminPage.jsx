import { useEffect, useState } from "react";
import { getAllUsers } from "../api/cleanBot.api";
import { UserTable } from "../components/UserTable";

export function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const res = await getAllUsers();
      setUsers(res.data);
      console.log(res.data);
    }
    loadUsers();
  }, []);

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
}
