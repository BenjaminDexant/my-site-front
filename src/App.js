import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Article from "./components/Article";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/login" exact component={Login} />
      </Switch>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/articles/:id_article" exact component={Article} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
