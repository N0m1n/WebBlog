import { Header, AllBlog, Footer } from "../components/Index.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/router.js";

const SinglePost = () => {
  const router = useRouter();
  console.log(router.query.id);

  const [queryId, setQueryId] = useState([]);

  const fetchData = async () => {
    try {
      const queryId = await fetch(
        `https://dev.to/api/articles/${router.query.id}`
      );

      const queryData = await queryId.json();

      setQueryId(queryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);
  console.log(queryId);

  return (
    <div className="bg-white flex flex-col gap-[100px]">
      <Header></Header>
      <div className="max-w-screen-xl m-auto flex flex-col gap-5">
        <div>
          <div className="text-4xl text-black font-bold ">{queryId.title}</div>

          <div className="flex flex-row gap-6">
            <div className="flex flex-row gap-2">
              <img
                className="size-6 border border-gray-950 rounded-full"
                src="/user-regular.svg"
                alt=""
              />
              <div className=" text-base text-gray-950">
                {queryId.user?.name || "Name"}
              </div>
            </div>

            <div className=" text-base text-gray-950">Date</div>
          </div>
          <div>
            <img src={queryId.social_image} alt="" />
          </div>
          <div url={queryId.url}></div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default SinglePost;
