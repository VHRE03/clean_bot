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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}
