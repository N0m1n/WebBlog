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
    <div className="bg-white flex flex-col gap-[100px]">
      <MainContent> </MainContent>

      <TrendingBlog></TrendingBlog>
      <div>
        <div className="max-w-screen-xl m-auto flex flex-col gap-20 ">
          <div className="text-4xl text-black font-bold ">All Blog Post</div>
          <div className="flex flex-row place-content-between ">
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
