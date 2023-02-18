import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  </div>
);
export default App;
