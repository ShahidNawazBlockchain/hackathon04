import React from "react";

import img1 from "../assets/images/im1.png";
import img3 from "../assets/images/im3.png";
import img4 from "../assets/images/im4.png";
import img5 from "../assets/images/im5.png";
function Sectio2() {
  return (
    <div className="w-full h-[40vh] bg-black rounded-xl mt-[51px]  ">
      <div className="  left-[7.5rem] flex flex-col items-center justify-center gap-[3.75rem] py-16">
        <div className="flex lg:flex-row flex-col  items-center justify-start gap-[1.13rem]">
          <div className=" leading-[115%] text-white">
            We’ve worked with hundreds of amazing people
          </div>
          <div className=" box-border w-[43rem] h-[0.06rem] border-t-[1px] border-solid border-darkgray" />
        </div>
        <div className=" flex flex-col items-start justify-start gap-[1.56rem]">
          <div className="w-full flex flex-row items-start justify-start gap-[6.88rem]">
            <img
              className=" w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img1}
            />
            <img
              className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img3}
            />
            <img
              className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img4}
            />
            <img
              className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img5}
            />
          </div>
          <div className="shrink-0 flex flex-row items-start justify-start gap-[6.88rem]">
            <img
              className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img5}
            />
            <img
              className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img5}
            />
            <img
              className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img5}
            />
            <img
              className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={img5}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectio2;
