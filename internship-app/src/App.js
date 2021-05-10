import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/users";
import Todos from "./components/todos";
import HomePage from "./components/home";
import Comment from "./components/comment";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/comment">Post a comment</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/comment">
            <Comment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
