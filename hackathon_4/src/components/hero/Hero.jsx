import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="container mx-auto">
      <Navbar />

      <div class="w-full pt-40  text-black text-[64px] font-bold ">
        Award-winning <br /> development studio <br /> based in Denmark.
      </div>
      <div class="w-full text-black text-xl font-light font-['Mona-Sans'] leading-[23px]">
        We are a development studio working at the intersection of design and
        technology. <br />
        It’s a really busy intersection though — a lot of our staff have been
        involved in hit <br />
        and runs.
        <br />
      </div>
    </div>
  );
}

export default Hero;
