import React from "react";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-transparent text-white">
      <div className="text-2xl font-bold">
        <a href="/" className="hover:text-gray-300">
          CleanBot
        </a>
      </div>
      <ul className="flex space-x-6 items-center">
        <li>
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="/product" className="hover:text-gray-300">
            Product
          </a>
        </li>
        <li>
          <a href="/blog" className="hover:text-gray-300">
            Blog
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
