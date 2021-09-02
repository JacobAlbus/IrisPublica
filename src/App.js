import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home"
import dncAnalysis from "./components/articles/dnc-sentiment-analysis"
import textGeneration from "./components/articles/text-genration"
import TextGeneratorInterface from "./components/text-generator-interface"

import "./App.css"

function App() {
  return (
    <html>
      <body>
        <div class="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand ms-3">
            IrisPublica
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/text-generator"} className="nav-link">
                Text Generator
              </Link>
            </li>
          </div>
        </nav>

        <div id="main">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/articles/dnc-sentiment-analysis" component={dncAnalysis} />
            <Route path="/articles/text-generation" component={textGeneration} />
            <Route path="/text-generator" component={TextGeneratorInterface} />
          </Switch>
        </div>
      </div>
      </body>
    </html>
  );
}

export default App;