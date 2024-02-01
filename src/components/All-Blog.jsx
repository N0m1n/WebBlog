import { useEffect, useState } from "react";

export const AllBlog = ({ blog }) => {
  return (
    <div className="w-full flex flex-col gap-20 ">
      <div className="text-4xl text-black font-bold ">All Blog Post</div>
      <ul className="flex flex-row gap-4 ">
        <li>All</li>
        <li>Design</li>
        <li>Travel</li>
        <li>Fashion</li>
        <li>Technology</li>
        <li>Branding</li>
        <li className="items-end">View All</li>
      </ul>

      <div className="w-full grid grid-cols-3  gap-[30px] items-center justify-center  ">
        {blog.map((el) => {
          return (
            <div className="border rounded-md flex flex-col gap-4 p-10">
              <img className="rounded-md" src={el.social_image} alt="" />
              <p className="text-indigo-600 px-4 w-fit bg-gray-100 rounded-sm">
                {el.tags.toUpperCase().split(" ")[1]}
              </p>
              <h1 className="text-black text-2xl">{el.title}</h1>
              <p className="text-gray-300 text-base">
                {el.readable_publish_date}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
