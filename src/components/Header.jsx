import { useState } from "react";

export const Header = ({ handleSearch }) => {
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="container flex  gap-[118px] py-8">
        <div className="w-full">
          <img src="Logo.svg" alt="" />
        </div>
        <div className="flex gap-[21px]">
          <ul className=" w-[667px] flex  text-base  gap-10 justify-center items-center">
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>

          <div className=" flex flex-row bg-gray-100 gap-3 border-gray-100 rounded-[5px] py-2  pl-4 pr-2">
            <input
              onChange={handleSearch}
              type="text"
              className="bg-gray-100 text-sm w-[114px]"
            />
            <img className="size-4" src="/search-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
