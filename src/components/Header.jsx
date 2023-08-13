import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <main className="flex items-center justify-between max-w-6xl pt-4 px-4 mx-auto">
        <img
          src="https://about.netflix.com/images/logo.png"
          alt=""
          className="w-[200px]"
        />
        <div className="flex items-center gap-5">
          <div className="border-[1px] py-1  border-white/40 px-2 rounded-sm">
            <span>🌐</span>
            <select className="text-white bg-transparent outline-none text-center ">
              <option className="bg-black "> English</option>
              <option className=" bg-black "> हिन्दी</option>
            </select>
          </div>
          <Link className="block px-4 py-[8px] text-center text-sm font-[600] rounded-[4px] text-white bg-[#E50914]  hover:opacity-90 duration-100">
            Sign in
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Header;
