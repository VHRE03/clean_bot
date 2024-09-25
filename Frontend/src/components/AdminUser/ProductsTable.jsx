export function ProductsTable({ products }) {
  return (
    <div className="m-20">
      <h1 className="text-5xl font-bold text-center max-w-l mx-auto mb-10">
        Productos
      </h1>

      <table className="min-w-full border-collapse bg-white shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2 text-left">Nombre del producto</th>
            <th className="px-4 py-2 text-left">Descripción</th>
            <th className="px-4 py-2 text-left">Descripción detallada</th>
            <th className="px-4 py-2 text-left">Precio</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">Stock</th>
            <th className="px-4 py-2 text-left">Fecha de cración</th>
            <th className="px-4 py-2 text-left">Fecha de actualización</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-200">
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.little_description}</td>
              <td className="border px-4 py-2">{product.description}</td>
              <td className="border px-4 py-2">{product.price}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2">{product.created_at}</td>
              <td className="border px-4 py-2">{product.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
