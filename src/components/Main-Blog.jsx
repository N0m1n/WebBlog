import { useContext, useEffect, useState } from "react";
import { Context } from "./layout/Context";

export const MainContent = () => {
  const { Latest } = useContext(Context);

  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? Latest.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) => (current === Latest.length - 1 ? 0 : current + 1));
  };
  return (
    <div className=" max-w-screen-xl m-auto flex flex-col items-center justify-center   ">
      <div className=" w-[1216px]  flex flex-row overflow-x-hidden ">
        {Latest.map((el) => {
          return (
            <div
              className="w-fit transition-transform ease-out duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <div className="relative">
                <img
                  className="max-w-[1216px] h-[651px]"
                  src={el.social_image || "latest-blog.png"}
                  alt=""
                />
                <div className="w-[598px] absolute bottom-[10px] rigth-[10px] z-10 flex flex-col gap-4 bg-white border rounded-xl p-10">
                  <span className="px-[10px] py-1 rounded-md text-sm w-fit bg-indigo-500 text-white">
                    Technology
                  </span>
                  <h1 className="text-4xl font-semibold  text-justify text-black ">
                    {el.title}
                  </h1>
                  <p className="text-gray-600 text-base">
                    {el.readable_publish_date}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-row  justify-end  gap-1 *:p-3 *:border *:size-10  *: *:rounded-md *:border-gray-800">
        <img
          onClick={prev}
          className="cursor-pointer"
          src="/arrow-left.svg"
          alt=""
        />
        <img
          on
          onClick={next}
          className="cursor-pointer "
          src="/arrow-right.svg"
          alt=""
        />
      </div>
    </div>
  );
};
