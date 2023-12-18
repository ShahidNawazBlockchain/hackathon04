import React from "react";
import Card from "./footer";
import Vector from "../../assets/images/Vector.png";
function Footer1() {
  return (
    <div className="container mx-auto font-bold py-10">
      <div className="mx-10 mt-10 flex flex-col  md:flex-row justify-between">
        <div>
          <Card
            text1={"Work"}
            text2={"FamilyFund"}
            text3={"Unseal"}
            text4={"Phobia"}
            text5={"See all"}
          />
        </div>
        <div>
          <Card
            text1={"Company"}
            text2={"About"}
            text3={"Process"}
            text4={"Blog"}
            text5={"Contact us"}
          />
        </div>
        <div className="mb-4">
          <Card
            text1={"Connect"}
            text2={"Facebook"}
            text3={"Instagram"}
            text4={"Twitter"}
            text5={"GitHub"}
            text6={"Dribbble"}
          />
        </div>
        <div className="md:max-w-[30%] max-w-[100%] flex flex-col gap-6 mb-4">
          <div className="flex flex-col gap-3">
            <h6 className="font-medium text-lg">Sign up for our newsletter</h6>
            <p className="font-light">
              Subscribe to get the latest design news, articles, resources and
              inspiration.
            </p>
          </div>
          <div>
            <form className="">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900  sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative p-2">
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-1  bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <img src={Vector} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
