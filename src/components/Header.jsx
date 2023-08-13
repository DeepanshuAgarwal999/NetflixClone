import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <main className="flex items-center justify-between max-w-6xl pt-4 px-4 mx-auto">
        <img
          src="https://about.netflix.com/images/logo.png"
          alt=""
          className="sm:w-[200px] w-[120px]"
        />
        <div className="flex items-center gap-5">
          <div className="border-[1px] py-1 sm:text-md text-sm border-white/40 px-2 rounded-sm">
            <span>🌐</span>
            <select className="text-white bg-transparent outline-none text-center ">
              <option className="bg-black "> English</option>
              <option className=" bg-black "> हिन्दी</option>
            </select>
          </div>
          <Link className="block sm:px-4 sm:py-[7px] px-[3px] py-[6px] text-center text-sm font-[600] rounded-[4px] text-white bg-[#E50914]  hover:opacity-90 duration-100">
            Sign in
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Header;
