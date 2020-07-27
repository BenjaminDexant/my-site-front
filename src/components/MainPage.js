import React, { useEffect, useState } from "react";
import Article from "./Article";
import ArticleForm from "./ArticleForm";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export default function MainPage() {
  const [articles, setArticles] = useState([]);

  const classes = useStyles();

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
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {articles.map((article) => {
            return <Article article={article} key={article.id_article} />;
          })}
        </Grid>
      </Container>
      <ArticleForm />
    </>
  );
}
