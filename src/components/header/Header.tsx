import React from "react";
import TopBar from "./Topbar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <TopBar />
      <nav className="flex justify-between items-center px-10 py-5 shadow-md">
        <div className="flex gap-8">
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
            alt=""
            className="w-24 h-auto"
          />
          <Navbar />
        </div>
        <div>Search</div>
      </nav>
    </header>
  );
};

export default Header;
