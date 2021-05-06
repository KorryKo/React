import React, { useState, useEffect } from "react";
import css from "./layout.css";
import Message from "./Message.component";

const messageField = () => {
    const [messages, setMessages] = useState([]);
    const [messageValue, setMessageValue] = useState("");
    const [messageAuthor, setMessageAuthor] = useState("");

    const addMessage = () => {
      const newAuthor = 'You'
      const message = {
        value: messageValue,
        author: newAuthor
      }
      setMessages(oldMessage => [...oldMessage, message]);
      setMessageAuthor(newAuthor)
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
      setMessages(oldMessage => [...oldMessage, message]);
      setMessageAuthor(newAuthor)
    }

    useEffect(() => {
      if (messageAuthor != 'Bot' && messages.length != 0) {
        botMessage()
      }
    }, [messages]);


    return(
      <div className={css.container}>
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

export default messageField;