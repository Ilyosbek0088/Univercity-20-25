import React, { useState } from 'react';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full transition-all text-[#36384E] px-4 py-3 md:hidden">
      {/* Top bar with logo and menu button */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Mr.Bean</div>

        {/* Menu Toggle */}
        <button
          className="text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="mt-3 space-y-2">
          <a href="#univers" className="block hover:text-black">Univers</a>
          <a href="#courses" className="block hover:text-black">Courses</a>
          <a href="#community" className="block hover:text-black">Community</a>
          <a href="#news" className="block hover:text-black">News</a>
          <a href="#about" className="block hover:text-black">About</a>
          <div className="mt-3">
            <button className="w-full py-2 font-bold hover:text-black rounded mb-2">
              LOGIN
            </button>
            <button className="w-full py-2 font-bold bg-[#E5B300] hover:text-black rounded">
              
              SIGN UP
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;
