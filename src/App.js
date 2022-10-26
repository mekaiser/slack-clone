import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./components/Chat";
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
              element={<Chat/>}
            ></Route>
          </Routes>
        </AppBody>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`