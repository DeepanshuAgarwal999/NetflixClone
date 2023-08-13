import React from "react";
import Stripe from "../components/Stripe";

const Page6 = () => {
  return (
    <div>
      <main className="w-full text-white  border-t-8 border-[#2d2d2d] bg-black">
        <section className="max-w-6xl sm:py-16 mx-auto">
          <h1 className="text-center sm:text-[46px] text-[30px] font-bold p-5">
            Frequently Asked Questions
          </h1>
          <div>
            <Stripe heading="what is Netflix?" text1="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices."
            text2="You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
             />
            <Stripe heading="How much does Netflix cost?" text1="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts." />
            <Stripe heading="Where can I watch?" text1="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
            text2="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles." />
            <Stripe heading="How do I cancel?" text1="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."/>
            <Stripe heading="what can I watch on Netflix?" text1="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." />
            <Stripe heading="Is Netflix good for kids?" text1="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."
            text2="Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." />
          </div>
          <h1 className="text-center text-white p-5 text-xl">Ready to watch? Enter your email to create or restart your membership.</h1>
          <div className="max-w-2xl gap-2 sm:flex mx-auto items-center justify-center px-6 pt-5">
              <div className="sm:w-[400px] w-full px-8 sm:px-0 mx-auto">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full rounded-[5px] text-white p-3  bg-transparent h-[60px] border-white/40 border-[2px]"
                />
              </div>
              <div className="sm:py-0 py-8">
                <button className="bg-[#E50914] hover:opacity-80 duration-150 ease-in block mx-auto rounded-lg sm:text-2xl text-lg sm:w-[200px] w-[150px] sm:h-[60px] h-[45px] text-white font-semibold ">
                Get Started 
                </button>
              </div>
            </div>

            

        </section>
      </main>
    </div>
  );
};

export default Page6;
