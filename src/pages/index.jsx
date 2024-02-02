import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Header,
  MainContent,
  TrendingBlog,
  AllBlog,
  Footer,
  ContactData,
} from "../components/Index.js";

import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// import { Header } from "../components/Index";

const statusArray = [
  {
    latestStatus: "latest",
    pages: {
      per_pages: "9",
    },
    trending: "state=rising",
  },
];

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);
  const [Latest, SetLatest] = useState([]);
  const [Trending, SetTrending] = useState([]);
  const [loader, Setloader] = useState(9);

  let pageStatus = "9";

  const fetchData = async () => {
    try {
      const articles = await fetch(
        `https://dev.to/api/articles?per_page=${pageStatus}`
      );
      const latest = await fetch(
        `https://dev.to/api/articles?state=fresh&per_page=3`
      );
      const rising = await fetch(
        `https://dev.to/api/articles?state=rising&per_page=4`
      );

      const articlesData = await articles.json();
      const latestData = await latest.json();

      const risingData = await rising.json();

      setArticles(articlesData);
      SetLatest(latestData);
      SetTrending(risingData);

      setFilteredArray(articlesData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(fetchData);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };
  return (
    <div className="bg-white flex flex-col gap-[100px]">
      <Header handleSearch={handleSearch}></Header>

      <MainContent latest={Latest}> </MainContent>

      <TrendingBlog trend={Trending}></TrendingBlog>

      <AllBlog blog={filteredArray}></AllBlog>

      <Footer></Footer>
    </div>
  );
}
