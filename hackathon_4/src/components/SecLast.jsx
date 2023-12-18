import React from "react";

function SecLast() {
  return (
    <div className="mx-6 rounded-[40px] bg-black mt-20 p-5s md:p-14 lg:p-20 xl:p-28 2xl:p-36 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Tell us about your project
        </h1>
      </div>
      <div>
        <button className="bg-white text-black rounded-full px-3 py-2">
          Say Hey
        </button>
      </div>
      <hr className="text-[#878787]" />
      <div>
        <h2 className="text-2xl font-medium text-white">Our offices</h2>
      </div>
      <div className="flex max-w-full md:max-w-[70%] justify-between">
        <div className="flex gap-2 flex-col">
          <h5 className="font-bold text-white">Copenagen</h5>
          <p className="font-light text-white">
            1 Carlsberg Gate <br />
            1260, København, Denmark
          </p>
        </div>
        <div className="flex gap-2 flex-col">
          <h5 className="font-bold text-white">Billund</h5>
          <p className="font-light text-white">
            24 Lego Allé <br />
            7190, Billund, Denmark
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecLast;
