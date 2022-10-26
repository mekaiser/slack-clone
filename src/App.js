import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={(e) => console.log(e.current.target)}
            ></Route>
          </Routes>
        </AppBody>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

const AppBody = styled.div``