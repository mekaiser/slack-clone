import { Button } from "@material-ui/core";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn-icons-png.flaticon.com/512/5968/5968929.png"
          alt=""
        />
        <Title>Sign in to the BLADE WORLD</Title>
        <p style={{ marginTop: "5px" }}>blade.slack.com</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  @media (max-width: 768px) {
    padding: 60px;
  }

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
    @media (max-width: 768px) {
      height: 80px;
      margin-bottom: 30px;
    }
  }

  > button {
    font-size: 1rem;
    margin-top: 50px;
    padding: 12px 18px;
    text-transform: inherit !important;
    background-color: #00c04b !important;
    color: white;
    &:hover {
      background-color: #00ab41 !important;
    }
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-top: 40px;
      padding: 8px 14px;
    }
  }
`;

const Title = styled.h1`
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
