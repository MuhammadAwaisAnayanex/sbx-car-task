"use client"; // Required for Next.js App Router
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons from lucide-react
import siteLogo from "../../assets/sbx-site-logo.svg";
import searchIcon from "../../assets/search-icon.svg";
import signInIcon from "../../assets/signIn-icon.svg"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);

  // Close search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full z-50 px-3">
      <div className="container mx-auto">
        <div className="top-header flex justify-between items-center relative">
          {/* 🟢 Menu Button */}
          <button className="text-gray-700 focus:outline-none" onClick={() => setMenuOpen(true)}>
            <Menu size={30} />
          </button>

          {/* 🟢 Site Logo */}
          <div className="site-logo">
            <a href="#">
              <Image src={siteLogo} alt="Site Logo" />
            </a>
          </div>

          {/* 🟢 Sign In & Search */}
          <div className="sign-in flex items-center gap-5 xl:gap-3 relative">
            {/* 🔍 Search Icon */}
            <button onClick={() => setSearchOpen(!searchOpen)} className="focus:outline-none">
              <Image src={searchIcon} alt="Search Icon" width={20} height={20} />
            </button>

            {/* 🔵 Search Input (Appears on Left) */}
            {searchOpen && (
              <div ref={searchRef} className="search-input">
                <input
                  type="text"
                  placeholder="Search a vehicle..."
                  autoFocus
                />
              </div>
            )}

            {/* 🟡 Sign In Button */}
            <button className="sign-btn">
              <span className="hidden xl:inline">Sign In</span>
              <span className="xl:hidden"><Image className="signIn-logo" src={signInIcon} alt="signIn icon" /></span>
            </button>
          </div>
        </div>

        {/* 🔵 Sidebar Menu */}
        <div className={`fixed left-0 side-bar-menu h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
          {/* ❌ Close Button */}
          <button className="absolute top-4 right-4 text-gray-600" onClick={() => setMenuOpen(false)}>
            <X size={30} />
          </button>

          {/* 🟡 Menu Items */}
          <nav className="mt-16 px-3">
          <h4 className="lg:hidden pb-5">Menu</h4>
            <ul>
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
        {menuOpen && <div className="fixed  bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>}

        <div className="bottom-header">
            <ul className="flex items-center justify-center flex-wrap">
                <li><a href="#">Auctions</a></li>
                <li><a href="#">Preview</a></li>
                <li><a href="#">Results</a></li>
                <li><a href="#">Sell</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
        {/* end-container */}
      </div>

    </header>
  );
};

export default Header;
