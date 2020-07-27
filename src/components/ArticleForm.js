import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#1e392a",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

export default function ArticleForm() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");

  const history = useHistory();

  const userData = JSON.parse(localStorage.getItem('user'));

  const handleClick = (e) => {
    e.preventDefault();
    const url = `http://localhost:4000/articles`;
    const formData = {
      title,
      content,
      image_url_1: imageUrl1,
      image_url_2: imageUrl2,
      id_admin: userData.id_admin,
    };
    console.log(formData);
    axios
      .post(url, formData)
      .then((response) => {
        if (response.status === 200) {
          const newArticle = {
            title: "",
            content: "",
            image_url_1: "",
            image_url_2: "",
            date: "",
          };
          console.log(newArticle);
          Swal.fire({
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            text: `Article added !`,
            timer: 1000,
            backdrop: `rgba(0,0,0,0.5)`,
          });
          return history.push("/");
        }
        return () => {
          Swal.fire({
            icon: "error",
            showCancelButton: false,
            showConfirmButton: false,
            text: "Invalid datas 😕",
            timer: 1000,
            backdrop: "rgba(0,0,0,0.5)",
          });
        };
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          showCancelButton: false,
          showConfirmButton: false,
          text: `Something went wrong !`,
          timer: 1000,
          backdrop: `rgba(0,0,0,0.5)`,
        });
      });
  };

  if (userData) { return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create an article
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Article title"
            name="title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="content"
            label="Article content"
            id="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Add an image"
            placeholder="URL expected"
            type="url"
            id="image_url_1"
            name="image_url1"
            onChange={(e) => setImageUrl1(e.target.value)}
            value={imageUrl1}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Add an image"
            placeholder="URL expected"
            type="url"
            id="image_url_2"
            name="image_url2"
            onChange={(e) => setImageUrl2(e.target.value)}
            value={imageUrl2}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(e) => handleClick(e)}
          >
            Add
          </Button>
        </form>
      </div>
    </Container>
  );
 } else { return null}
}
