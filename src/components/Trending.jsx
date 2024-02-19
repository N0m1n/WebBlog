import { split } from "postcss/lib/list";
import { useContext, useEffect, useState } from "react";
import { Context } from "./layout/Context";
import Link from "next/link";

export const TrendingBlog = ({ trend }) => {
  const { Trending } = useContext(Context);

  return (
    <div className=" sm: max-w-screen-xl sm: m-auto sm:flex sm:flex-col  sm:gap-[30px]">
      <h2 className="font-bold text-4xl text-black px-5 py-4">Trending</h2>

      <div className="sm:w-full sm:grid sm:grid-cols-4 flex flex-col h-[50%] overflow-y-hidden gap-5 ">
        {Trending.map((el) => {
          return (
            <div>
              <Link href={{ pathname: "/single-post", query: { id: el.id } }}>
                <div
                  className="w-[293px] h-[320px] rounded-md relative"
                  style={{
                    backgroundImage: `url(${
                      el?.cover_image || "./latest-blog.png"
                    })`,
                  }}
                >
                  <div className=" w-full h-full bg-black bg-opacity-30 rounded-md  ">
                    <div className="flex flex-col m-auto justify-center p-8 gap-4 absolute bottom-[10px] ">
                      <p className="text-white text-base  w-fit px-3 py-1 items-start rounded-md bg-indigo-500">
                        {el.tags.toUpperCase().split(", ")[1]}
                      </p>

                      <h1 className="flex text-white text-lg text-justify font-bold items-center">
                        {el.title}
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
