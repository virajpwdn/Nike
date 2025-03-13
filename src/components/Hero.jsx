import React from "react";
import Button from "../utils/Button";
import { arrowRight } from "../assets/icons/index";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-[100vw] flex xl:flex-row flex-col justify-center border-2 min-h-screen max-container gap-10 border-red-500"
    >
      <div className="relative xl:w-2/5 flex flex-col  justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br /> <span>Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button label={"shop now"} iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
