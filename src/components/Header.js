import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import { auth } from "../firebase";

function Header({ drawerOpenHandler }) {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <HeaderInnerSearch>
          <SearchIcon />
          <input placeholder="Search PAPAFAM" />
        </HeaderInnerSearch>
      </HeaderSearch>

      <HeaderRight>
        <HeaderInnerRight>
          <HelpOutlineIcon />
          <MenuIcon onClick={drawerOpenHandler} />
        </HeaderInnerRight>
      </HeaderRight>

      {/* Header Right */}
    </HeaderContainer>
  );
}

export default Header;

const HeaderSearch = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 50%;
  }
`;

const HeaderInnerSearch = styled.div`
  margin: 0 auto;
  max-width: 30rem;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 3px 20px;
  color: gray;
  border: 1px gray solid;
  @media (max-width: 768px) {
    padding: 3px 10px;
  }

  > input {
    color: white;
    background-color: transparent;
    border: none;
    text-align: center;
    width: 100%;
    outline: 0;
    @media (max-width: 768px) {
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  padding-left: 20px;
  @media (max-width: 768px) {
    width: 20%;
  }

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    @media (max-width: 768px) {
      margin-right: 2px;
    }
  }
`;

const HeaderRight = styled.div`
  width: 30%;
  display: flex;
  align-items: flex-end;
  @media (max-width: 768px) {
    width: 20%;
  }
`;

const HeaderInnerRight = styled.div`
  display: inline-flex;
  margin-left: auto;
  margin-right: 20px;
  gap: 14px;
  @media (max-width: 768px) {
    gap: 10px;
  }

  > .MuiSvgIcon-root:nth-last-child(1) {
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
