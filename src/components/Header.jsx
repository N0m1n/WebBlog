import { useState } from "react";
import { Context } from "./layout/Context";
import { useContext } from "react";
import Link from "next/link";

export const Header = () => {
  const { handleSearch } = useContext(Context);

  return (
    <div className="w-full   px-8 bg-white sticky top-0">
      <div className="max-w-screen-xl m-auto pb-[100px] flex justify-center gap-[118px] py-8">
        <div className="w-full">
          <img src="Logo.svg" alt="" />
        </div>
        <div className="flex gap-[21px]">
          <ul className=" w-[667px] flex  text-base  gap-10 justify-center items-center">
            <Link href={"./"}>
              <li> Home</li>
            </Link>
            <Link href={{ pathname: "/bloglist" }}>
              <li>Blog</li>
            </Link>

            <li>Contact</li>
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
