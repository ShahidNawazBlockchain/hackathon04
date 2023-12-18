import React from "react";
import im from "../assets/images/screencapturestudiotailwindui2023121519-02-01-1@2x.png";
import logo from "../assets/images/ll.png";
function Section5() {
  return (
    <div className="relative flex items-center justify-center w-[100%] left-[0rem]  h-[30rem] text-[2.25rem]">
      <img
        className="absolute top-[0rem] left-[0rem] w-full h-[30rem] object-cover z-[1]"
        alt=""
        src={im}
      />
      <div className="absolute  left-[7.5rem] flex flex-col items-start justify-start gap-[1.88rem] z-[1]">
        <div className="relative container mx-auto  leading-[115%] inline-block w-[66.19rem]">
          &quot; The team at Studio went above and beyond with our onboarding,
          even finding a way to access the user’s microphone without triggering
          one of those annoying permission dialogs. &quot;
        </div>
        <img
          className="relative w-[11.5rem] h-[2.25rem] overflow-hidden shrink-0 object-cover"
          alt=""
          src={logo}
        />
      </div>
    </div>
  );
}

export default Section5;
