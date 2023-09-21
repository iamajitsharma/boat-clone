import TopBar from "./Topbar";
import Navbar from "./Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";

const Header = () => {
  return (
    <header>
      <TopBar />
      <nav className="flex justify-between items-center px-10 py-6 shadow-md">
        <div className="flex gap-16">
          <img
            src="https://www.boat-lifestyle.com/cdn/shop/files/boAt_logo_small_3067da8c-a83b-46dd-b28b-6ef1e16ccd17_small.svg?v=1693549434"
            alt=""
            className="w-24 h-auto"
          />
          <Navbar />
        </div>
        <div className="flex items-center gap-2 max-w-sm w-full">
          <div className="flex items-center justify-between bg-gray-100 p-2 rounded-full w-full">
            <div className="flex items-center gap-2">
              <AiOutlineSearch className="text-2xl" />
              <input
                type="text"
                placeholder="Search Smartwatch"
                className="bg-transparent"
              />
            </div>
            <RxCross2 />
          </div>
          <span className="flex items-center gap-4 text-2xl">
            <CiUser />
            <SlHandbag />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
