import {animateChat} from "../chats/actions";
import animations from "../animations.css"
import {AUTHORS} from "../../utils/constants";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (newMessage, chatId) => ({
    type: ADD_MESSAGE,
    payload: {
        message: newMessage,
        chatId,
    },
});

let timeout;

export const addMessageWithThunk = (newMessage, chatId) => (dispatch) => {
    dispatch(addMessage(newMessage, chatId));

    if (newMessage.author !== AUTHORS.BOT) {
        dispatch(animateChat( chatId,newMessage.author,""));
        timeout = setTimeout(() => {
            dispatch(addMessageWithThunk({text: "I AM BOT", author: AUTHORS.BOT}, chatId));
        }, 5000);
    }

    if (newMessage.author === AUTHORS.BOT) {
        dispatch(animateChat( chatId,newMessage.author,animations.animateChat));
    }
};
