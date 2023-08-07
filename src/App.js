import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home"
import dncAnalysis from "./components/articles/dnc-sentiment-analysis"
import textGeneration from "./components/articles/text-generation"
import TextGeneratorInterface from "./components/text-generator-interface"
import jjbaStrategyGame from "./components/articles/jjba-strategy-game";
import ageOfJojo from "./components/articles/age-of-jojo";
import factorizedBaselines from "./components/articles/factorized-baselines"

import "./App.css"

function App() {
  return (
    <div class="App">

    <div class="mb-5">
      <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
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
    </div>

    <div class="mt-5" id="main">
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route path="/articles/dnc-sentiment-analysis" component={dncAnalysis} />
        <Route path="/articles/jjba-strategy-game" component={jjbaStrategyGame} />
        <Route path="/articles/text-generation" component={textGeneration} />
        <Route path="/articles/age-of-jojo" component={ageOfJojo} />
        <Route path="/text-generator" component={TextGeneratorInterface} />
        <Route path="/articles/factorized-baselines" component={factorizedBaselines} />
      </Switch>
    </div>

    </div>
  );
}

export default App;