import { useEffect, useState } from "react";

export const MainContent = ({ latest }) => {
  return (
    <div className=" w-full flex flex-col items-center justify-center border rounded-md ">
      {latest.map((el) => {
        return (
          <div>
            <div className="relative">
              <img src={el.social_image} alt="" />
              <div className="w-[598px] absolute bottom-[20px] z-10 bg-white border rounded-xl p-10">
                <span className="px-[10px] py-1 rounded-md text-sm text-white">
                  Technology
                </span>
                <h1>{el.title}</h1>
                <p>{el.readable_publish_date}</p>
              </div>
            </div>
            <div className="flex flex-row place-content-end gap-1 *:border  *:size-10  *:rounded-md *:border-gray-800">
              <img src="/arrow-left.svg" alt="" />
              <img src="/arrow-right.svg" alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
