import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

function ChatInput({ chatRef, channelName, channelId }) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault(); // prevent refresh

    if (!channelId) {
      return false;
    }

    const docRef = doc(db, "rooms", channelId);

    await addDoc(collection(docRef, "messages"), {
      message: input,
      timestamp: serverTimestamp(),
      user: "Sonny Sangha",
      userImage:
        "https://www.kaiserahmed.net/_next/image?url=%2Fassets%2Fabout%2Fcompressed%2Fkaiser-photo-min.png&w=1080&q=75",
    });

    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
