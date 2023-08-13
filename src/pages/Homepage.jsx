import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import home from "../images/home.jpg";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Page5 from "./Page5";
import Page6 from "./Page6";
const Homepage = () => {
  return (
    <div>
      <div className="w-full sm:h-[700px] h-full ">
      <main
        className="md:bg-center w-full h-full sm:bg-auto bg-contain  "
        style={{ backgroundImage: `url(${home})` }}
      >
        <section className="w-full h-[100%] bg-black/60 p-2 pb-10">
          <div className="max-w-6xl mx-auto">
            <Header />
            <div className="mx-auto w-6xl md:pt-48 sm:pt-40 pt-16">
              <h1 className="font-bold lg:text-5xl text-3xl text-center text-white ">
                Unlimited movies, TV shows and more
              </h1>
              <h2 className="text-white sm:text-2xl py-3 px-2 text-center">
                Watch anywhere. Cancel anytime.
              </h2>
              <h3 className="text-white   sm:text-[20px] text-[18px]  px-12 py-2 text-center">
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
            </div>
            <div className="max-w-2xl gap-2 sm:flex mx-auto items-center justify-center px-6 pt-5">
              <div className="sm:w-[400px] w-full px-8 sm:px-0 mx-auto">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full rounded-[5px] text-white p-3  bg-transparent h-[60px] border-white/40 border-[2px]"
                />
              </div>
              <div className="sm:pt-0 pt-4">
                <button className="bg-[#E50914] hover:opacity-80 duration-150 ease-in block mx-auto rounded-lg sm:text-2xl text-lg sm:w-[200px] w-[150px] sm:h-[60px] h-[45px] text-white font-semibold ">
                Get Started 
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>


      </div>
      


      
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      <Footer/>
    </div>
  );
};

export default Homepage;
