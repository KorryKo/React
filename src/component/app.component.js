import React, { useState } from "react";
import css from "./app.component.css";

const myComponent =()=>{
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState();
    const [messageKey, setMessageKey] = useState(0)
    const receiveMessage = (receivedMessage) =>{
       setMessage(receivedMessage.target.value)
    }
    const addMessage = ()=>{
        setMessageKey(messageKey + 1)
        setMessages(oldMessage =>[...oldMessage, {id:messageKey,value:message}]);
    }
    return (<div>
            <input type="text" onChange={receiveMessage} id="messageInput"></input>
            <button className={css.intro} onClick={addMessage}>
            Send
            </button>
            <div>{messages.map(message=> <p key={message.id}>{message.value}</p>)}</div>
        </div>)
}
export default myComponent;