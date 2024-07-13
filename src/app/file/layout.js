"use client";
import Link from 'next/link';
import { useState } from 'react';
import Head from './Head';
import Header from '../components/Header';
import { FaPaperclip } from 'react-icons/fa';

const links = [
  { label: 'Vendor request details', route: '/file' },
  { label: 'Vendor form details', route: '/file/vendorformdetails' },
  { label: 'Add finance details', route: '/file/addfinancedetails' }
];

const VendorForm = ({ children }) => {
  const [activeLink, setActiveLink] = useState('/file'); // Set default active link to '/file'

  const handleLinkClick = (route) => {
    setActiveLink(route);
  };

  return (
    <>
      <Header />
      <Head />
      <div className="p-4 h-full overflow-y-auto flex flex-col md:flex-row gap-10 custom-scrollbar">
        {/* Vendor Form Details */}
        <div className="bg-white shadow w-full md:w-3/4 overflow-y-auto text-gray-400 custom-scrollbar">
          <div className="flex text-sm border-b p-2 gap-4">
            {links.map((link, index) => (
              <NavLink
                key={index}
                label={link.label}
                route={link.route}
                onClick={() => handleLinkClick(link.route)}
                active={activeLink === link.route}
              />
            ))}
          </div>
          {children}
        </div>

        {/* Attachments Section */}
        <div className="bg-white shadow rounded-lg px-6 py-3 flex-grow overflow-y-auto custom-scrollbar">
          <div className="flex justify-between border-b">
            <h2 className="text-xl font-bold text-gray-700 mb-2">Attachments</h2>
            <FaPaperclip className="mr-2 text-gray-700 mt-2" />
          </div>
          <div className="grid grid-cols-1 gap-4 mt-2">
            <Attachment label="GST Certificate" />
            <Attachment label="PAN Number" />
            <Attachment label="MSME Certificate" />
            <Attachment label="Vendor Contract" />
            <Attachment label="Vendor Final Proposal" />
          </div>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ label, route, onClick, active }) => (
  <Link href={route}>
    <p
      className={`flex items-center justify-center p-2 cursor-pointer transition-all 
                  ${active ? 'text-blue-500 font-bold' : 'text-gray-500 font-normal'}`}
      onClick={onClick}
    >
      {label}
    </p>
  </Link>
);

const Attachment = ({ label }) => (
  <div className="flex flex-col rounded-lg">
    <label className="text-md font-semibold text-gray-700 mb-2">{label}</label>
    <div className="flex items-center justify-around md:w-2/3 p-2 bg-cyan-50 text-center">
      <label>
        <input type="file" className="hidden" />
        <span className="text-sm text-gray-800">vtech...ve.pdf</span>
      </label>
    </div>
  </div>
);

export default VendorForm;
