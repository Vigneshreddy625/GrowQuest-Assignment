"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBell, FaHome, FaLeaf, FaCompass, FaFileAlt, FaCog } from "react-icons/fa";

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex items-center justify-between bg-gray-100 border-b border-gray-300 px-4 py-3 md:px-6">
      <div className="flex gap-4">
      <div className="lg:hidden flex items-center">
            <button
              className={`focus:outline-none `}
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="gray"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
      <h1 className="text-xl md:text-2xl font-semibold text-black">Manage Vendor</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
      <Link href='/' className="hidden lg:block relative p-2 border border-gray-400 rounded-full hover:bg-gray-200">
          <FaHome className="text-gray-600" />
        </Link>
        <button className="hidden lg:block relative p-2 border rounded-full border-gray-400 hover:bg-gray-200">
          <FaBell className="text-gray-600" />
          <span className="absolute top-0 right-2 block h-1 w-1 bg-red-600 rounded-full"></span>
        </button>
        <div className="flex flex-col ustify-center items-center md:flex-row md:items-center gap-2 pl-2 border-l-2 border-gray-400 text-sm">
          <img
            className="w-8 h-8 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <div className="hidden lg:flex flex-col text-black text-sm">
            <p className="font-medium text-center md:text-start text-xs md:text-sm">Vignesh Reddy</p>
            <p className="text-gray-600 text-xs md:text-sm">vigneshreddy@growquest.in</p>
          </div>
        </div>
        <div
          className={`lg:hidden fixed inset-y-0 left-0 z-50 overflow-y-auto transition-transform duration-500 ease-in-out transform bg-slate-400 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-2/3 `}
        >
          <div className="flex justify-between items-center py-4 px-4">
            <button
              className={`focus:outline-none `}
              onClick={toggleMenu}
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300 hover:scale-110"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="font-medium">
            <li>
              <Link
                href="/"
                onClick={toggleMenu}
                className="flex items-center gap-2 block py-2 px-4 hover:bg-gray-100 transition-all duration-300"
                activeClassName="text-orange-700 font-semibold"
              >
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/leaf"
                onClick={toggleMenu}
                className="flex items-center gap-2 block py-2 px-4 hover:bg-gray-100 transition-all duration-300"
                activeClassName="text-orange-700 font-semibold"
              >
                <FaLeaf />
                Leaf
              </Link>
            </li>
            <li>
              <Link
                href="/compass"
                onClick={toggleMenu}
                className="flex items-center gap-2 block py-2 px-4 hover:bg-gray-100 transition-all duration-300"
                activeClassName="text-orange-700 font-semibold"
              >
                <FaCompass />
                Compass
              </Link>
            </li>
            <li>
              <Link
                href="/file"
                onClick={toggleMenu}
                className="flex items-center gap-2 block py-2 px-4 hover:bg-gray-100 transition-all duration-300"
                activeClassName="text-orange-700 font-semibold"
              >
                <FaFileAlt />
                File
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                onClick={toggleMenu}
                className="flex items-center gap-2 block py-2 px-4 hover:bg-gray-100 transition-all duration-300"
              >
                <FaCog/>
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
