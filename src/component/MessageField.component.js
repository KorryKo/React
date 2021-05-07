import React, { useState, useEffect } from "react";
import "./layout.css";
import Message from "./Message.component";

const MessageField = () => {
    const [messages, setMessages] = useState([]);
    const [messageValue, setMessageValue] = useState("");
    const addMessage = () => {
      const newAuthor = 'You'
      const message = {
        value: messageValue,
        author: newAuthor
      }
      setMessages(oldMessages => [...oldMessages, message]);
    }

    const changeMessage = (changedMessage) => {
      const newMessageValue = changedMessage.target.value
      setMessageValue(newMessageValue)
    }

    const botMessage = ()=>{
      const newMessageValue = 'Beep-Boop'
      const newAuthor = 'Bot'
      const message  = {
        value: newMessageValue,
        author: newAuthor
      }
      setMessages(oldMessages => [...oldMessages, message]);
    }

    useEffect(() => {
      if (messages.length != 0 && messages[messages.length-1].author != "Bot") {
        botMessage()
      }
    }, [messages]);


    return(
      <div className="container">
          <div>
            {messages.map((message, index)=>
            <Message key={index} message={message} />)}
          </div>
          <input onChange={changeMessage}></input>
          <button onClick={addMessage}>
            Send
          </button>
      </div>
    )
}

export default MessageField;