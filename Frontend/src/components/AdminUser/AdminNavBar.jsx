export function AdminNavBar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gray-800 text-white">
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-300">
          CleanBot
        </a>
      </div>
      <ul className="flex space-x-6 items-center">
        <li>
          <a href="/" className="hover:text-gray-300">
            Productos
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-300">
            Usuarios
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>
        </li>
        <li>
          <button className="px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black">
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
}
