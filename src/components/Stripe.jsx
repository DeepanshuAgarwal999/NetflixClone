import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Stripe = ({ heading, text1, text2 }) => {
  const allquestion = useRef(null);
  useEffect(() => {
    const ques = allquestion.current;
    
      ques.addEventListener("click", () => {
        ques.nextElementSibling.classList.toggle("h-[auto]");
        ques.nextElementSibling.classList.toggle("scale-y-100");
        ques.nextElementSibling.classList.toggle("p-[20px]");
        ques.children[1].classList.toggle("rotate-45")
        // arr.forEach((e, i) => {
        //   if (1) {
        //     e.nextElementSibling.classList.remove(
        //       "h-[auto]",
        //       "scale-y-100",
        //       "p-[20px]"
        //       );
        //     }
        //   });
        });
  
      },[]);

  return (
    <div className="py-1 px-4">
      <main className="w-full bg-[#2D2D2D]  text-white ">
        <section>
          <div
            className="px-5 flex justify-between hover:bg-[rgb(78,78,78)] duration-500 border-b-[1px] border-black items-center cursor-pointer faqQuestion "
            ref={allquestion}
          >
            <h1 className="text-white sm:text-[24px] text-[18px]">{heading}</h1>
            <span className="sm:text-[55px] text-[40px] font-light ">+</span>
          </div>
          <div className="px-6 text-[20px] scale-y-0 h-0 origin-top duration-300">
            <p className="py-4 ">{text1}</p>
            <p className="py-2">{text2}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stripe;
