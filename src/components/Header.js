import React from "react";
import { Button, IconButton } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import logo from "../image/logo.jpg";
import "./header.css";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <img src={logo} alt="Logo" />
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Benjamin DEXANT
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Web Developer
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={1} justify="center">
            <Grid item>
              <Link to="/">
                <Button variant="outlined" color="primary">
                  <HomeIcon color="inherit" /> Home
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                <a href={"https://www.linkedin.com/in/benjamin-dexant/"}>
                  <LinkedInIcon color="inherit" /> My LinkedIn
                </a>
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                <a href={"https://github.com/BenjaminDexant"}>
                  <GitHubIcon color="inherit" /> My GitHub
                </a>
              </Button>
            </Grid>
            <Grid item>
              <Link to="/login">
                <Button variant="outlined" color="primary">
                  <AddCircleOutlineIcon color="inherit" /> Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
export default Header;
