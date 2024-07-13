"use client";
import Link from "next/link";
import { FaBell, FaHome } from "react-icons/fa";

function Header() {
  return (
    <header className="w-full flex items-center justify-between bg-gray-100 border-b border-gray-300 px-4 py-3 md:px-6">
      <h1 className="text-xl md:text-2xl font-semibold text-black">Manage Vendor</h1>
      <div className="flex items-center gap-2 md:gap-4">
      <Link href='/' className="relative p-2 border border-gray-400 rounded-full hover:bg-gray-200">
          <FaHome className="text-gray-600" />
        </Link>
        <button className="relative p-2 border rounded-full border-gray-400 hover:bg-gray-200">
          <FaBell className="text-gray-600" />
          <span className="absolute top-0 right-2 block h-1 w-1 bg-red-600 rounded-full"></span>
        </button>
        <div className="flex flex-col ustify-center items-center md:flex-row md:items-center gap-2 pl-2 border-l-2 border-gray-400 text-sm">
          <img
            className="w-8 h-8 rounded-full"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <div className="flex flex-col text-black text-sm">
            <p className="font-medium text-center md:text-start text-xs md:text-sm">Vignesh Reddy</p>
            <p className="text-gray-600 text-xs md:text-sm">vigneshreddy@growquest.in</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
