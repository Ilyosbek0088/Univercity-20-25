import React from 'react';

const NavbarDefault = () => {
  return (
    <nav className=" text-black  py-3 w-full hidden sm: md:flex justify-between items-center ">
      {/* Logo */}
      <div className="text-2xl font-bold text-[#36384E]">Mrs. College Guide</div>

      {/* Nav Links */}
      <div className="flex space-x-6">
        <a href="#univers" className=" text-[#36384E] hover:text-gray-300">Univercities</a>
        <a href="#courses" className="text-[#36384E] hover:text-gray-300">Courses</a>
        <a href="#community" className="text-[#36384E] hover:text-gray-300">Community</a>
        <a href="#news" className="text-[#36384E] hover:text-gray-300">News</a>
        <a href="#about" className="text-[#36384E] hover:text-gray-300">About</a>
      </div>

      {/* Buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 hover:text-gray-600 font-bold">LOGIN</button>
        <button className="px-4 py-2 bg-[#E5B300] text-white font-bold hover:text-gray-600">SIGN UP</button>
      </div>
    </nav>
  );
};

export default NavbarDefault;
