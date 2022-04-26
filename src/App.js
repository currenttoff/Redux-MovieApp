import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import MovieDetail from "./components/MovieDetail";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/movie/:imdbID"
              element={<MovieDetail></MovieDetail>}
            ></Route>
            <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
