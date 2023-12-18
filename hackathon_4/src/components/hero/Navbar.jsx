import React, { useState } from "react";
import Images from "../../assets/images/phframerlogo@2x.png";
import menu from "../../assets/images/Vector.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex justify-between items-center h-16 px-4 bg-white shadow">
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-[30px] relative">
          <img src={Images} alt="" />
        </div>
        <div className="text-black text-xl font-semibold font-['Mona-Sans']">
          Studio
        </div>
      </div>

      <div className="flex items-end gap-[15px]">
        <button className="text-white text-xl font-bold font-['Mona-Sans'] bg-black p-3 rounded-lg">
          Contact
        </button>
        <button className="text-white text-xl font-bold  font-['Mona-Sans'] bg-black p-3 rounded-lg">
          Cart(0)
        </button>

        <div
          className="px-4 py-5 bg-neutral-200 rounded-[31px] hover:bg-slate-400 flex-col justify-start items-start gap-2.5 inline-flex cursor-pointer"
          onClick={openMenu}
        >
          <img src={menu} alt="" />
        </div>
      </div>

      {/* Menu content */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-50 hamberg1">
          <div className="text-white p-8">
            <div
              className="cursor-pointer absolute top-4 right-4 text-[1.6rem]"
              onClick={closeMenu}
            >
              X
            </div>
            <div className="w-full h-auto grid grid-cols-2 mt-12 gap-4">
              <div className="w-full h-auto col-span-1 border border-white px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-black hover:text-white duration-1000 shadow-2xl hover:border-green-600 hover:rounded-full">
                <p className="text-white md:text-[4rem]">Our Work</p>
              </div>
              <div className="w-full h-auto col-span-1 border border-white px-8 py-5 md:py-[2rem] hover:cursor-pointer hover:bg-black hover:text-white duration-1000 shadow-2xl hover:border-green-600 hover:rounded-full">
                <p className="text-white md:text-[4rem]">About Us</p>
              </div>
              {/* ... add other menu items */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
