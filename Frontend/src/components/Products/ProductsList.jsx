import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../api/products.api";
import { ProductsCard } from "./ProductsCard";

export function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await fetchAllProducts();
      setProducts(response.data);
    }
    loadProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
      {products.map((product) => (
        <div className="mb-12" key={product.id}>
          <ProductsCard product={product} />
        </div>
      ))}
    </div>
  );
}
