import React, { Component } from "react";
import "./styles/main.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Upload from "./components/Upload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/video/:id"
            render={props => {
              return <Home {...props} />;
            }}
          />
          <Route path="/upload" exact component={Upload} />
        </Switch>
      </Router>
    );
  }
}
export default App;


// 