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
    <div className="bg-white flex flex-col gap-[100px] ">
      <div className="max-w-screen-xl m-auto flex flex-col gap-5 mb-[100px]">
        <div className="flex flex-col gap-5">
          <div className="text-4xl text-black font-bold ">{queryId.title}</div>

          <div className="flex flex-row gap-6">
            <div className="flex flex-row gap-10">
              <img
                className="size-6 border border-gray-950 rounded-full"
                src={queryId.user?.profile_image || "/user-regular.svg"}
                alt=""
              />
              <div className=" text-base text-gray-950">
                {queryId.user?.name || "Name"}
              </div>
            </div>

            <div className=" text-base text-gray-950">
              {queryId.readable_publish_date}
            </div>
          </div>
          <div>
            <img src={queryId.social_image} alt="" />
          </div>
          <p
            className="text-balance"
            dangerouslySetInnerHTML={{ __html: queryId.body_html }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
