import { useEffect, useState } from "react";
import { ProductsList } from "../components/Products/ProductsList";
import { Navbar } from "../components/General/NavBar";
import { HeroSection } from "../components/General/HeroSection";
import { getLoginUser } from "../api/cleanBot.api";

export function HomePage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function loadLoginUser() {
      const token = localStorage.getItem("token");
      if (token) {
        // Verifica si el token existe
        try {
          const response = await getLoginUser(token);
          setUserData(response.data);
        } catch (error) {
          console.error("Error al obtener los datos del usuario:", error);
        }
      } else {
        console.log("No se encontró el token");
      }
    }

    loadLoginUser();
  }, []);

  return (
    <div className="bg-gray-950">
      <HeroSection />
      <Navbar userData={userData} />
      <ProductsList />
    </div>
  );
}
