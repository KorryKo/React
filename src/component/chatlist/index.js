import React from "react";
import css from "./styles.css";
import {makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles(() => ({
    root: {
        color: "#FFFFFF",
    },
    lastMessage: {
        fontSize: "12px",
        opacity: "0.6"
    }
}));

const Index = () => {

    const classes = useStyles();
    const chats = useSelector(store => store.chats.chatList);

    return (
        <List className={classNames(css.chatList, classes.root)}>
            {chats.map(
                (chat, index) =>
                    <div key={index}>
                        <Link to={`/chats/${chat.chatId}`}>
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src={chat.picture}/>
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
                                                {chat.name}
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
                            <Divider variant="inset" component="li"/>
                        </Link>
                    </div>
            )}
        </List>
    )
}

export default Index;