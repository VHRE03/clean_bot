import { ProductsList } from "../components/Products/ProductsList";
import { Navbar } from "../components/General/NavBar";
import { HeroSection } from "../components/General/HeroSection";

export function HomePage() {
  return (
    <div>
      <HeroSection />
      <Navbar />
      <ProductsList />
    </div>
  );
}
