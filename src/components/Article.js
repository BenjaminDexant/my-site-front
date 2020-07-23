import React from "react";

function Article(article) {
  return (
    <li>
      <h1>{article.title}</h1>
      <p>{article.date}</p>
      <p>{article.content}</p>
    </li>
  );
}
export default Article;
