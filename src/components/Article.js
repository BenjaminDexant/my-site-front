import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Article(article, key) {
  const classes = useStyles();
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <Grid item key={key} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={article.article.image_url_1}
          title={article.article.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {article.article.title}
          </Typography>
          <Typography>{article.article.date}</Typography>
          <Typography>{article.article.content}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          {userData ? (
            <Button size="small" color="primary">
              Edit
            </Button>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
export default Article;
