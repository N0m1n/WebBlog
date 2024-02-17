import Image from "next/image";
import { Inter } from "next/font/google";
import { Context } from "../components/layout/Context";
import { useContext, useEffect, useState } from "react";
import {
  Header,
  MainContent,
  TrendingBlog,
  AllBlog,
  Footer,
} from "../components/Index.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { ViewAll, FilteredTag } = useContext(Context);

  return (
    <div className="bg-white flex flex-col sm:gap-[100px]">

      <MainContent> </MainContent>

      <TrendingBlog></TrendingBlog>
      <div>
        <div className="sm:max-w-screen-xl sm:m-auto sm:flex sm:flex-col gap-20">
          <div className="sm:text-4xl text-3xl text-black sm:font-bold  p-8 font-semi-bold">All Blog Post</div>
          <div className="sm:flex sm:flex-row sm:place-content-between sm:visible hidden ">
            <ul className="flex flex-row gap-4 ">
              <li>All</li>
              <li onClick={FilteredTag}>CSS</li>
              <li>Travel</li>
              <li>Fashion</li>
              <li>Technology</li>
              <li>Branding</li>
            </ul>
            <button onClick={ViewAll}>View All</button>
          </div>
        </div>
      </div>

      <AllBlog></AllBlog>
    </div>
  );
}
