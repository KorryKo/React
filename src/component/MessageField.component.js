import React, { useState, useEffect } from "react";
import css from "./layout.css";
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import Paper from '@material-ui/core/Paper';
import Message from "./Message.component";
import ChatList from "./ChatList.component";
import TextField from '@material-ui/core/TextField';

const MessageField = () => {
  const [messages, setMessages] = useState([]);
  const [messageValue, setMessageValue] = useState("");
  const addMessage = (event) => {
    event.preventDefault()
    const newAuthor = 'You'
    const message = {
      value: messageValue,
      author: newAuthor
    }
    setMessages(oldMessages => [...oldMessages, message]);
    setMessageValue(" ")
  }

  const changeMessage = (changedMessage) => {
    const newMessageValue = changedMessage.target.value
    setMessageValue(newMessageValue)
  }

  const botMessage = () => {
    const newMessageValue = 'Beep-Boop'
    const newAuthor = 'Bot'
    const message = {
      value: newMessageValue,
      author: newAuthor
    }
    setTimeout(() => { setMessages(oldMessages => [...oldMessages, message]); }, 1000);
  }

  useEffect(() => {
    if (messages.length != 0 && messages[messages.length - 1].author != "Bot") {
      botMessage()
    }
  }, [messages]);

  return (
    <div>
      <Paper elevation={1} className={css.chatBox}>
        <ChatList />
        <div className={css.messageField}>
          <div className={css.messageBox}>
            {messages.map(
              (message, index) =>
                <Message key={index} message={message} />
            )
            }
          </div>
          <form className={css.messageBar} onSubmit={addMessage}>
            <TextField
              className={css.inputMessage}
              label="Message"
              onChange={changeMessage}
              fullWidth={true}
              value={messageValue}
            />
            <IconButton type="submit" aria-label="send">
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </Paper>
    </div>
  )
}

export default MessageField;