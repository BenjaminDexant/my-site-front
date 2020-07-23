import React from "react";
import Article from "./Article";

function MainPage() {
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
export default MainPage;
