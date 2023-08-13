import React from "react";
import mobile from "../images/mobile-0819.jpg";
const Page3 = () => {
  return (
    <div className="w-full  border-t-8 border-[#2d2d2d] bg-[#000000] px-2 ">
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 grid-cols-1 items-center sm:py-20 py-16  ">
        <figure className="relative sm:order-2 order-1">
          <img src={mobile} alt="" />
          <div className="sm:w-[60%]  sm:left-[20%] w-[60%] left-[20%] absolute border-[2px] border-[#858484] rounded-xl  bottom-8 grid grid-cols-[70%_auto] items-center bg-black">
            <div className="grid grid-cols-[40%_auto] items-center ">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                className="md:w-[80px] sm:p-2 w-[50px] p-1"
                alt=""
              />
              <div>
                <p className="text-white font-bold sm:text-normal text-sm ">Stranger Things <br /> <span className="text-blue-700 font-normal">Downloading...</span></p>
              </div>
            </div>
            <div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                alt=""
                className="md:w-[100px] sm:p-4 w-[70px] py-2 "
              />
            </div>
          </div>
        </figure>

        <div className="text-white sm:order-2 order-1">
          <h1 className=" sm:text-5xl text-3xl text-center sm:text-left py-2 font-bold sm:leading-[70px] leading-[50px] ">
            Download your shows to watch offline
          </h1>
          <h2 className="sm:text-[22px] text-[18px] sm:text-left py-2  text-center">
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Page3;
