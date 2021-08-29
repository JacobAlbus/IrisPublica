import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import RestaurantsList from "./components/restaurants-list"
import AddReview from "./components/add-review"
import Restaurant from "./components/restaurant"
import Home from "./components/home"
import dncAnalysis from "./components/articles/dnc-sentiment-analysis"
import textGeneration from "./components/articles/text-genration"
import TextGeneratorInterface from "./components/text-generator-interface"

import "./App.css"

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <html>
      <body>
        <div class="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand ms-3">
            IrisPublica
          </a>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item" >
              { user ? (
                <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                  Logout {user.name}
                </a>
              ) : (            
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
              )}

            </li> */}
            <li className="nav-item">
              <Link to={"/text-generator"} className="nav-link">
                Text Generator
              </Link>
            </li>
          </div>
        </nav>

        <div id="main">
          <Switch>
            <Route exact path="/restaurants" component={RestaurantsList} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route path="/articles/dnc-sentiment-analysis" component={dncAnalysis} />
            <Route path="/articles/text-generation" component={textGeneration} />
            <Route path="/text-generator" component={TextGeneratorInterface} />

            <Route 
              path="/restaurants/:id/review"
              render={(props) => (
                <AddReview {...props} user={user} />
              )}
            />
            <Route 
              path="/restaurants/:id"
              render={(props) => (
                <Restaurant {...props} user={user} />
              )}
            />
          </Switch>
        </div>
      </div>
      </body>
    </html>
  );
}

export default App;