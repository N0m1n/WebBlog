import { split } from "postcss/lib/list";
import { useContext, useEffect, useState } from "react";
import { Context } from "./layout/Context";

export const TrendingBlog = ({ trend }) => {
  const { Trending } = useContext(Context);

  return (
    <div className=" max-w-screen-xl m-auto flex flex-col  gap-[30px]">
      <h2 className="font-bold text-4xl text-black px-5 py-4">Trending</h2>
      <div className=" w-full grid grid-cols-4 gap-5 ">
        {Trending.map((el) => {
          return (
            <div
              className="w-[293px] h-[320px] rounded-md relative"
              style={{
                backgroundImage: `url(${el.cover_image})`,
              }}
            >
              <div className=" w-full h-full bg-black bg-opacity-30 rounded-md  ">
                <div className="flex flex-col m-auto justify-center p-8 gap-4 absolute bottom-[10px] ">
                  <p className="text-white text-base  w-fit px-3 py-1 items-start rounded-md bg-indigo-500">
                    {el.tags.toUpperCase().split(" ")[1]}
                  </p>

                  <h1 className="flex text-white text-lg text-justify font-bold items-center">
                    {el.title}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
