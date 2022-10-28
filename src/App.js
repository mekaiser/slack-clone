import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Chat from "./components/Chat";
import Header from "./components/Header";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebase";

function App() {
  const [user, loading] = useAuthState(auth);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const drawerOpenHandler = () => {
    setDrawerOpen(prev => !prev);
  };

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header drawerOpenHandler={drawerOpenHandler} />
            <AppBody>
              <Sidebar isDrawerOpen={isDrawerOpen} />
              <Routes>
                <Route path="/" element={<Chat />}></Route>
              </Routes>
            </AppBody>
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
