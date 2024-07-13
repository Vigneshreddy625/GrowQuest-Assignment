"use client";
import Link from 'next/link';
import { useState } from 'react';
import { FaFileAlt, FaLeaf, FaCompass, FaCog } from 'react-icons/fa';
import "./style.css"

const pages = [
  { icon: <FaLeaf />, label: 'Leaf', route: '/leaf' },
  { icon: <FaCompass />, label: 'Compass', route: '/compass' },
  { icon: <FaFileAlt />, label: 'File', route: '/file' },
  { icon: <FaCog />, label: 'Settings', route: '/settings' }
];

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  const handleNavItemClicked = (route) => {
    setActiveNavItem(route);
  };

  return (
    <div className="navbar flex flex-col gap-4 md:gap-10 pt-3 items-center w-14 lg:w-18 h-screen text-white border-r">
      {pages.map((page, index) => (
        <NavItem
          key={index}
          icon={page.icon}
          label={page.label}
          onClick={() => handleNavItemClicked(page.route)}
          active={activeNavItem === page.route}
          route={page.route}
        />
      ))}
    </div>
  );
};

const NavItem = ({ icon, onClick, active, route }) => (
  <Link href={route}>
    <div
      className={`flex flex-col items-center p-3 justify-center w-full h-12 cursor-pointer transition-all 
                  ${active ? 'bg-gray-700 text-yellow-400 rounded-l-full' : 'hover:bg-cyan-950 text-gray-500 hover:rounded-l-full'}`}
      onClick={onClick}
    >
      <div className="text-lg">{icon}</div>
    </div>
  </Link>
);

export default Navbar;
