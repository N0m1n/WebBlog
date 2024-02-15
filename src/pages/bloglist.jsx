import { Header, AllBlog, Footer } from "../components/Index.js";

export default function BlogList() {
  return (
    <div className="bg-white flex flex-col gap-[100px]">
      <div className="max-w-screen-xl m-auto flex flex-col gap-20 ">
        <div className="text-4xl text-black font-bold ">All Blog Post</div>
        <AllBlog></AllBlog>
      </div>
    </div>
  );
}
