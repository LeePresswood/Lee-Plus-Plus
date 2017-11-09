import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../styles/App.css";
import HeaderNavigation from "./HeaderNavigation";
import MultiPostLayout from "./MultiPostLayout";
import SinglePostLayout from "./SinglePostLayout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <HeaderNavigation/>
        </header>
        <main>
          <Route exact path="/" component={ MultiPostLayout }/>
          <Route exact path="/pages/:pageId" component={ MultiPostLayout }/>
          <Route exact path="/posts/:postId" component={ SinglePostLayout }/>
        </main>
        <footer>
          Footer here
        </footer>
      </div>
    );
  }
}

export default App;
