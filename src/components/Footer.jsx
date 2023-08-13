import React from "react";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="w-full border-t-8 border-[#2d2d2d] bg-[#000000] ">
      <section className="max-w-6xl sm:py-8  px-6 mx-auto items-center ">
        <h1 className="text-[rgba(255,255,255,0.7)] py-10">Questions? Call <span className="underline">000-800-919-1694</span></h1>
        <main className="grid sm:grid-cols-3 grid-cols-2  text-[rgba(255,255,255,0.7)] gap-5 underline font-[400] text-[15px]">
          <div>
            <ul>
             <li className="mb-[10px]"> <Link>FAQ</Link></li> 
             <li className="mb-[10px]"><Link>Media Centre</Link></li>
             <li className="mb-[10px]"> <Link>Ways to Watch</Link></li>
             <li className="mb-[10px]"><Link>Cookie Preferences</Link></li>
             <li className="mb-[10px]"> <Link>Speed Test</Link></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-[10px]"><Link>Help Centre</Link></li>
              <li className="mb-[10px]"><Link>Investor Relations</Link></li>
              <li className="mb-[10px]"><Link>Terms of Use</Link></li>
              <li className="mb-[10px]"><Link>Corporate Information</Link></li>
              <li className="mb-[10px]"><Link>Legal Notices</Link></li>
            </ul>
          </div>
          <div>
            <ul>
             <li className="mb-[10px]"><Link>Account</Link></li>
              <li className="mb-[10px]"><Link>Jobs</Link></li>
              <li className="mb-[10px]"><Link>Privacy</Link></li>
              <li className="mb-[10px]"><Link>Contact Us</Link></li>
              <li className="mb-[10px]"><Link>Only on Netflix</Link></li>
            </ul>
          </div>
        </main>
       <div className="py-8">
       <div className="border-[1px] py-1 bg-white/10 w-[120px] border-white/40 px-2 rounded-sm">
            <span>🌐</span>
            <select className="text-white bg-transparent outline-none text-center ">
              <option className="bg-black "> English</option>
              <option className=" bg-black "> हिन्दी</option>
            </select>
          </div>
          <p className="text-gray-500 py-4">Netflix India</p>
       </div>
      </section>
    </div>
  );
};

export default Footer;
