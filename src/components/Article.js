import React from "react";

function Article(article) {
  return (
    <li>
      <h1>{article.article.title}</h1>
      <p>{article.article.date}</p>
      <p>{article.article.content}</p>
    </li>
  );
}
export default Article;
