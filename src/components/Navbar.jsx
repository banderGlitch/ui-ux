import React from "react";
import apple from "/public/assets/images/apple.svg";
import search from "/public/assets/images/search.svg";
import bag from "/public/assets/images/bag.svg";
import { navLists } from "../constants";
function Navbar() {
  return (
    <header className="w-full h-15 flex justify-between items-center max-sm:p-3">
      <nav className="flex w-full screen-max-width">
        <div
          className="flex flex-1 justify-center
            gap-2    
            sm:gap-4       
            md:gap-6       
            lg:gap-8       
            xl:gap-10 items-center"
        >
          <img src={apple} alt="Apple" width={14} height={18} />
          {navLists.map((nav) => (
            <div
              key={nav}
              className="max-md:hidden text-sm cursor-pointer text-gray hover:text-black transition-all"
            >
              {nav}
            </div>
          ))}
          <div className="flex items-baseline gap-10 max-sm:justify-end p-2 max-sm:flex-1 items-center">
            <img src={search} alt="search" width={12} height={12} />
            <img src={bag} alt="bag" width={12} height={12} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
