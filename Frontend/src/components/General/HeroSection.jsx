import robotVacuum from "../../assets/robot-vacuum.jpg"; // Ajusta la ruta según tu estructura

export function HeroSection() {
  return (
    <div className="relative text-left">
      <img
        src={robotVacuum}
        alt="Robot Vacuum"
        className="w-full h-[400px] object-cover" // Ajusta la altura a 64 (16rem)
      />
      <div className="absolute inset-0 flex items-center justify-start p-8 bg-gradient-to-t from-black to-transparent">
        <h1 className="text-white text-5xl font-bold max-w-lg">
          Find the perfect product for you today
        </h1>
      </div>
    </div>
  );
}
