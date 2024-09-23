export function ProductsCard({ product }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
        {/* Icono de favorito */}
        <button className="absolute top-2 right-2 bg-gray-700 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>

      <div className="mt-4">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
          {product.name}
        </h1>
        <h2 className="text-sm text-gray-400">{product.little_description}</h2>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2">
          ${product.price}
        </h2>
      </div>

      {/* Botón de agregar al carrito */}
      <div className="mt-4 flex items-center justify-between">
        <button className="bg-gray-700 text-white px-4 sm:px-6 lg:px-8 py-2 rounded-full hover:bg-gray-600">
          Add to cart
        </button>
        <button className="bg-gray-700 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-gray-600">
          +
        </button>
      </div>
    </div>
  );
}
