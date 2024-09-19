import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/products",
});

export const fetchAllProducts = () => productsApi.get("/");
