import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { Context } from "./layout/Context";

import SinglePost from "@/pages/single-post";

export const AllBlog = () => {
  const { filteredArray, setFilteredArray, LoadMore } = useContext(Context);

  return (
    <div className="sm:max-w-screen-xl sm:m-auto flex flex-col sm:gap-20 sm:mb-[100px]">
      <div className="sm:w-full sm:grid sm:grid-cols-3 flex flex-col gap-5 sm:gap-[30px] items-center justify-center  ">
        {filteredArray.map((el) => {
          return (
            <div>
              <Link href={{ pathname: "/single-post", query: { id: el.id } }}>
                <div className="border rounded-md flex flex-col gap-4 p-10">
                  <img className="rounded-md" src={el.social_image} alt="" />
                  <p className="text-indigo-600 px-4 w-fit bg-gray-100 rounded-sm">
                    {el.tags.toUpperCase().split(", ")[1]}
                  </p>
                  <h1 className="text-black text-2xl">{el.title}</h1>
                  <p className="text-gray-300 text-base">
                    {el.readable_publish_date}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="sm:flex sm:justify-center sm:visible invisible ">
        <button onClick={LoadMore} className="border rounded-md py-3 px-5">
          Load More
        </button>
      </div>
    </div>
  );
};
