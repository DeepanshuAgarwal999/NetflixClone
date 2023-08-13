import React from "react";
import tv from "../images/tv.png";
import video1 from "../images/video1.m4v";

const Page4 = () => {
  return (
    <div className="w-full  border-t-8 border-[#2d2d2d] bg-[#000000]">
      <section className="max-w-6xl mx-auto grid sm:grid-cols-2 grid-cols-1 h-full items-center sm:py-20 py-16 ">
        <div className="text-white ">
          <h1 className="sm:text-5xl text-3xl text-center sm:text-left font-extrabold py-4">Watch everywhere</h1>
          <h2 className="sm:text-[22px] text-[18px] sm:text-left text-center">
          Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.
          </h2>
        </div>
        <figure className="relative">
          <video src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" loop autoPlay muted className="absolute bottom-[40%] w-[65%] left-[17%] z-[1]"></video>
          <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className="relative z-[2]" alt="" />
        </figure>

      </section>
    </div>
  );
};

export default Page4;
