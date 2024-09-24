export function UserTable({ users }) {
  return (
    <div className="m-20">
      <h1 className="text-5xl font-bold text-center max-w-l mx-auto mb-10">
        Usuarios
      </h1>

      <table className="min-w-full border-collapse bg-white shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Nombre de usuario</th>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Correo electrónico</th>
            <th className="px-4 py-2 text-left">Número de contacto</th>
            <th className="px-4 py-2 text-left">Tipo de usuario</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-200">
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phone_number}</td>
              <td className="border px-4 py-2">
                {user.is_superuser ? "Administrador" : "Cliente"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
