"use client"; // Needed for Next.js App Router

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons from lucide-react
import siteLogo from "../../assets/sbx-site-logo.svg"; 
import searchIcon from "../../assets/search-icon.svg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <header className=" w-full z-50">
      <div className="container mx-auto ">
        <div className="top-header  flex justify-between items-center">
                    {/* 🟢 Menu Button */}
        <button 
          className="text-gray-700 focus:outline-none" 
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={30} />
        </button>

        {/* 🟢 Site Logo */}
        <div className="site-logo">
          <a href="#">
            <Image src={siteLogo} alt="Site Logo"/>
          </a>
        </div>

        {/* 🟢 Sign In Button */}
        <div className="sign-in flex items-center gap-3 ">
        <button><Image src={searchIcon}  alt="search icon" style={{width:"20px"}} /></button>
          <button className="sign-btn">
            Sign In
          </button>
          
        </div>

              {/* 🔵 Sidebar Menu */}
      <div className={`fixed  left-0 h-full w-64 bg-white shadow-lg transform side-bar-menu ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
        
        {/* ❌ Close Button */}
        <button 
          className="absolute top-4 right-4 text-gray-600" 
          onClick={() => setMenuOpen(false)}
        >
          <X size={30} />
        </button>

        {/* 🟡 Menu Items */}
        <nav className="mt-16 px-3">
          <ul className="">
            <li><a href="#">Actions</a></li>
            <li><a href="#">Preview</a></li>
            <li><a href="#">Results</a></li>
            <li><a href="#">Sell Your Vehicle</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </nav>
      </div>

      {/* 🔴 Overlay (Click Outside to Close) */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
        </div>

      </div>


    </header>
  );
};

export default Header;
