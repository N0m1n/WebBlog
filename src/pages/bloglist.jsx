import { Header, AllBlog, Footer } from "../components/Index.js";

export default function BlogList() {
  return (
    <div className="bg-white flex flex-col gap-[100px]">
      <Header></Header>
      <AllBlog></AllBlog>
      <Footer></Footer>
    </div>
  );
}
