export function UserTable({ users }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Nombre de usuario</th>
          <th>Correo electronico</th>
          <th></th>
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
