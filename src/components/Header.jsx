import { useState } from "react";
import { Context } from "./layout/Context";
import { useContext } from "react";
import Link from "next/link";

export const Header = () => {
  const { handleSearch } = useContext(Context);

  return (
    <div className="sm:w-full  sm:px-8 bg-white sm:sticky  sm:top-0">
      <div className="sm:max-w-screen-xl sm:m-auto sm:pb-[100px] sm:flex sm:justify-center sm:gap-[118px] sm:py-8">
        <div className="w-full flex flex-row p-5 justify-between">
          <img src="Logo.svg" alt="" />
          <img className="sm:invisible visible" src="menu.svg" alt="" />
        </div>
        <div className="sm:flex sm:gap-[21px] sm:visible invisible"> 

          <ul className=" sm:w-[667px] flex  text-base  gap-10 justify-center ">
            <Link href={"./"}>
              <li> Home</li>
            </Link>
            <Link href={{ pathname: "/bloglist" }}>
              <li>Blog</li>
            </Link>
            <Link href={{ pathname: "/contact" }}>
              <li>Contact</li>
            </Link>
          </ul>

          <div className=" flex flex-row bg-gray-100 gap-3 border-gray-100 rounded-[5px] py-2  pl-4 pr-2">
            <input
              onChange={handleSearch}
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-sm w-[114px]"
            />

            <img className="size-4" src="/search-icon.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
