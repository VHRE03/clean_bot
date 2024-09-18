export function UserTable({ users }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Nombre de usuario</th>
          <th>Nombre</th>
          <th>Correo electrónico</th>
          <th>Núnmero de contacto</th>
          <th>Tipo de usuario</th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            <td>{user.is_superuser ? "Administrador" : "Cliente"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
