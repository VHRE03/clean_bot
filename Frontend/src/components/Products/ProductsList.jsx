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
    <div>
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
}
