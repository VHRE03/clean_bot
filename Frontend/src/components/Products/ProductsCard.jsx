export function ProductsCard({ product }) {
  return (
    <div>
      <div>
        <img
          src={product.image_url}
          alt={product.name}
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <div>
        <h1>{product.name}</h1>
        <h2>{product.little_description}</h2>
        <h2>${product.price}</h2>
      </div>
    </div>
  );
}
