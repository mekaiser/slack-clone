import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
