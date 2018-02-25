import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <header>
            Main page
        </header>
        <aside>
          <p className="selected">About</p>
          <p>
            <Link to="/news">Wizard News</Link>
          </p>
        </aside>
        <article>
            <p>Main page </p>
        </article>
      </div>
    );
  }
}

export default Home;
