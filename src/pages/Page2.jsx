import React from "react";
import tv from "../images/tv.png";
import video1 from "../images/video1.m4v";
const Page2 = () => {
  return (
    <div className="w-full  border-t-8 border-[#2d2d2d] bg-[#000000] ">
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 grid-cols-1 h-full items-center sm:py-20 py-16 ">
        <div className="text-white ">
          <h1 className="sm:text-5xl text-3xl text-center sm:text-left font-extrabold py-4">Enjoy on your TV</h1>
          <h2 className="sm:text-[22px] text-[18px] sm:text-left text-center sm:px-0 px-2">
            Watch on smart TVs, PlayStation, Xbox, Chromecast,<br/> Apple
            TV, Blu-ray players and more.
          </h2>
        </div>
        <figure className="relative sm:px-0 px-6">
          <video src={video1} loop autoPlay muted className="absolute bottom-[20%] w-[80%] left-[10%] z-[1]"></video>
          <img src={tv} className="relative z-[2] " alt="" />
        </figure>

      </section>
    </div>
  );
};

export default Page2;
