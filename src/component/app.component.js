import React, { useState } from "react";
import css from "./app.component.css";

const myComponent =()=>{
    const [messages, setMessages] = useState([]) ;
    const addMessage = ()=>{
        let messageInput = document.getElementById('messageInput').value
        setMessages(oldMessage =>[...oldMessage, messageInput])
    }
    return [
        <input type="text" id="messageInput"></input>,
        <button className={css.intro} onClick={addMessage}>
            Send
        </button>,
        <div>{messages.map(message=> <p>{message}</p>)}</div>
    ];
}
export default myComponent;