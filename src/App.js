import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Article from "./components/Article";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
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
