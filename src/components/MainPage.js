import React, { useEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";

export default function MainPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/articles`;
    axios
      .get(url)
      .then((res) => res.data)
      .then((res) => setArticles(res))
      .catch((e) => {
        console.error(e);
        alert("Something went wrong");
      });
  }, []);
  return (
    <>
      <ul>
        {articles.map((article) => {
          return <Article article={article} key={article.id_article} />;
        })}
      </ul>
    </>
  );
}
