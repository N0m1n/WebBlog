import Image from "next/image";
import { Inter } from "next/font/google";

import {
  Header,
  MainContent,
  TrendingBlog,
  AllBlog,
  Footer,
} from "../components/Index.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white flex flex-col gap-[100px]">
      <Header></Header>

      <MainContent> </MainContent>

      <TrendingBlog></TrendingBlog>

      <AllBlog></AllBlog>

      <Footer></Footer>
    </div>
  );
}
