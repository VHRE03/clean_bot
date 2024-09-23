import { ProductsList } from "../components/Products/ProductsList";
import { Navbar } from "../components/General/NavBar";
import { HeroSection } from "../components/General/HeroSection";

export function HomePage() {
  return (
    <div className="bg-gray-950">
      <HeroSection />
      <Navbar />
      <ProductsList />
    </div>
  );
}
