import React from "react";

import { Link } from "react-router-dom";

import bg from "../assets/hero2.png";

const Hero = () => {
  return (
    <section className="bg-pink-200 h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="contain mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trends
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link to={'/'} className="self-start uppercase font-smibold border-b-2 border-gray-500">

            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img className="w-full " src={bg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
