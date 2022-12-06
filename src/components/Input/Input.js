import React from "react";

import { AiOutlineSend } from "react-icons/ai";
import "./Input.css";

const Inputs = ({ setMessage, sendMessage, message }) => {
  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />

      <button className="sendButton" onClick={(e) => sendMessage(e)}>
        <AiOutlineSend style={{ fontSize: "20px", color: "#ccc" }} />
      </button>
    </form>
  );
};

export default Inputs;
