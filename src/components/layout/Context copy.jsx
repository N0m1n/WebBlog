import { createContext, useEffect, useState } from "react";

export const Context = createContext([]);

export const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [filteredArray, setFilteredArray] = useState(articles);
  const [Latest, SetLatest] = useState([]);
  const [Trending, SetTrending] = useState([]);
  const [search, SetSearch] = useState([]);
  const [loader, Setloader] = useState(9);
  const [filteredTags, SetFilteredTags] = useState([]);
  const [isLoading, SetisLoading] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://dev.to/api/articles?per_page=${pageStatus}`)
  //       .then((response) => response.json())
  //       .then((response) => setArticles(response));
  //   }, []);

  //   return <Context.Provider value={articles}> {children}</Context.Provider>;
  // };

  const fetchData = async () => {
    try {
      const articles = await fetch(
        `https://dev.to/api/articles?per_page=200&per_page=${loader}`
      );
      const latest = await fetch(
        `https://dev.to/api/articles?state=fresh&per_page=4`
      );
      const rising = await fetch(
        `https://dev.to/api/articles?state=rising&per_page=4`
      );
      const search = await fetch(
        `https://dev.to/api/articles?per_page=${loader}`
      );

      const articlesData = await articles.json();
      const latestData = await latest.json();

      const risingData = await rising.json();

      const searchData = await search.json();

      setArticles(articlesData);
      SetLatest(latestData);
      SetTrending(risingData);

      SetSearch(searchData);

      setFilteredArray(articlesData);
    } catch (error) {
      console.log(error);
    }
  };

  const LoadMore = () => {
    Setloader(loader + 3);
  };

  const ViewAll = () => {
    Setloader(loader + 191);
  };

  useEffect(() => {
    fetchData();
  }, [loader]);

  const handleSearch = (event) => {
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredArray(filteredArticles);
  };

  // const FilteredTag = (ev) => {
  //   const filteredArticles = articles.filter((article) =>
  //     article.tags.toUpperCase().split(", ")[1].includes(ev.target.value)
  //   );
  //   setFilteredArray(filteredArticles);
  // };

  return (
    <Context.Provider
      value={{
        articles,
        Latest,
        Trending,
        filteredArray,
        setFilteredArray,
        handleSearch,
        LoadMore,
        ViewAll,
      }}
    >
      {children}
    </Context.Provider>
  );
};
