import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { Context } from "./layout/Context";

import SinglePost from "@/pages/single-post";

export const AllBlog = () => {
  const { filteredArray, LoadMore } = useContext(Context);

  return (
    <div className="max-w-screen-xl m-auto flex flex-col gap-20 ">
      <div className="w-full grid grid-cols-3  gap-[30px] items-center justify-center  ">
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
      <div className="flex justify-center ">
        <button onClick={LoadMore} className="border rounded-md py-3 px-5">
          Load More
        </button>
      </div>
    </div>
  );
};
