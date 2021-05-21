import React, {useEffect, useRef, useState} from "react";
import css from "./styles.css";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import ListItem from "@material-ui/core/ListItem";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {AUTHORS} from "../../utils/constants";

const useStyles = makeStyles(() => ({
    root: {
        color: "#FFFFFF",
    },
    lastMessage: {
        fontSize: "12px",
        opacity: "0.6"
    }
}));

const Chat = (props) => {

    const classes = useStyles();
    const messageList = useSelector(store => store.messages.messageList);
    const {chatId} = useParams();
    const loaded = useRef(false);
    const [isBlink,setIsBlink] = useState("")

    useEffect(() => {
        if (loaded.current) {
            if (chatId !== undefined) {
                if (messageList[props.chat.chatId][messageList[props.chat.chatId].length - 1].author === AUTHORS.BOT) {
                    setIsBlink(css.animateChat)
                }else{
                    setIsBlink("")
                }
            }
        } else {
            loaded.current = true;
        }
    }, [messageList[props.chat.chatId]])

    return (
        <ListItem className={isBlink} alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={props.chat.picture}/>
            </ListItemAvatar>
            <ListItemText
                className={classes.root}
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            className={classes.root}
                            color="initial"
                        >
                            {props.chat.name}
                        </Typography>
                        <Typography
                            component="span"
                            className={classNames(classes.root, classes.lastMessage)}
                        >
                            {" — I'll be in your neighborhood doing errands this…"}
                        </Typography>
                    </React.Fragment>
                }
            />
        </ListItem>
    )
}

export default Chat