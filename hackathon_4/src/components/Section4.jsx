import React from "react";
import im1 from "../assets/images/frame@2x.png";
import im2 from "../assets/images/frame@2x.png";
import im3 from "../assets/images/Frame.png";
function Section4() {
  return (
    <div className=" container mx-auto">
      <div className="  flex flex-row  items-center justify-center gap-[1.88rem] text-[1rem]  py-16  flex-nowrap">
        <div className="rounded-6xl bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.88rem] rounded-lg hover:bg-gray-200 px-[1.38rem] pb-[2.5rem] border-[1px] border-solid border-gainsboro-200">
          <div className=" flex flex-col items-start justify-start gap-[1.38rem] ">
            <img
              className=" w-[4.38rem] h-[4.38rem] overflow-hidden   object-cover"
              alt=""
              src={im1}
            />
            <div className="relative leading-[115%]">
              <b>2023</b>
              <span className="font-light"></span>
              <span className="font-medium">/ Case study</span>
            </div>
            <div className="relative text-[1.5rem] leading-[115%] inline-block w-[20.19rem]">
              Skip the bank, borrow from those you trust
            </div>
            <div className="relative leading-[130%] font-light text-dimgray-100 inline-block w-[20.94rem]">
              FamilyFund is a crowdfunding platform for friends and family.
              Allowing users to take personal loans from their network without a
              traditional financial institution.
            </div>
          </div>
        </div>
        <div className="rounded-6xl bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.88rem] rounded-lg hover:bg-gray-200 px-[1.38rem] pb-[2.5rem] border-[1px] border-solid border-gainsboro-200">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[1.38rem]">
            <img
              className="relative w-[4.38rem] h-[4.38rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={im2}
            />
            <div className="relative leading-[115%]">
              <b>2022</b>
              <span className="font-light">{` `}</span>
              <span className="font-medium">/ Case study</span>
            </div>
            <div className="relative text-[1.5rem] leading-[115%] inline-block w-[20.19rem]">
              Get a hodl of your health
            </div>
            <div className="relative leading-[130%] font-light text-dimgray-100 inline-block w-[20.94rem]">
              Unseal is the first NFT platform where users can mint and trade
              NFTs of their own personal health records, allowing them to take
              control of their data.
            </div>
          </div>
        </div>
        <div className="rounded-6xl bg-white overflow-hidden flex flex-col items-start justify-start pt-[1.88rem] rounded-lg hover:bg-gray-200 px-[1.38rem] pb-[2.5rem] border-[1px] border-solid border-gainsboro-200">
          <div className="shrink-0 flex flex-col items-start justify-start gap-[1.38rem]">
            <img
              className="relative w-[4.38rem] h-[4.38rem] overflow-hidden shrink-0 object-cover"
              alt=""
              src={im3}
            />
            <div className="relative leading-[115%]">
              <b>2023</b>
              <span className="font-light">{` `}</span>
              <span className="font-medium">/ Case study</span>
            </div>
            <div className="relative text-[1.5rem] leading-[115%] inline-block w-[20.19rem]">
              Overcome your fears, find your match
            </div>
            <div className="relative leading-[130%] font-light text-dimgray-100 inline-block w-[20.94rem]">
              Find love in the face of fear — Phobia is a dating app that
              matches users based on their mutual phobias so they can be scared
              together.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
