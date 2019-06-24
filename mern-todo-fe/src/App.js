import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Link } from "react-router-dom";
import TodosList from "./Components/TodosList";
import EditTodo from "./Components/EditTodo";
import CreateTodo from "./Components/CreateTodo";

function App() {
  return (
    <div className="container">
      <nav className="navbar nabar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          MERN-Stack Todo App
        </Link>
        <div className="navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link className="nav-link" to="/create">
                create todo
              </Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/">
                home
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Route path="/" exact component={TodosList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
    </div>
  );
}

export default App;
