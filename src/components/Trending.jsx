import { split } from "postcss/lib/list";
import { useEffect, useState } from "react";

export const TrendingBlog = ({ trend }) => {
  return (
    <div className=" w-full flex flex-col  border rounded-md gap-3">
      <h2 className="bold text-4xl text-black px-5 py-4">Trending</h2>
      <div className="grid grid-cols-4 gap-3">
        {trend.map((el) => {
          return (
            <div
              className="w-[293px] h-[320px] rounded-md relative"
              style={{
                backgroundImage: `url(${el.cover_image})`,
              }}
            >
              <div className="flex bg-gray-300 flex-col  absolute bottom-0 items-start">
                <p className="text-white text-base p-4 rounded-md bg-indigo-500">
                  {el.tags.toUpperCase().split(" ")[1]}
                </p>

                <h1 className="flex text-white  align-bottom">{el.title}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
