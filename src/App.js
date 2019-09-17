import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Register from "./Components/Register";

function App() {
  return (
    <BrowserRouter>
      <Redirect from="/" to="/register" exact />
      <Route path="/register" component={Register} />
    </BrowserRouter>
  );
}

export default App;
