import React, { useState } from "react";
import css from "./chatList.css";
import { makeStyles } from '@material-ui/core/styles';
import NormalGuyImg from "../assets/img/normalGuy.jpg"
import AbnormalGuyImg from "../assets/img/unnormal-guy.jpg"
import MarinaNotGuyImg from "../assets/img/marina.jpg"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames'

const useStyles = makeStyles((theme) => ({
    root: {
      color:"#FFFFFF",
    },
    lastMessage:{
        fontSize:"12px",
        opacity:"0.6"
    }
  }));

const ChatList = () => {
        const [contacts, setContacts] = useState([{
                name: "Matt Damon",
                picture: NormalGuyImg
            },
            {
                name: "Brendon Urie",
                picture: AbnormalGuyImg
            },
            {
                name: "Marina Diamandis",
                picture: MarinaNotGuyImg
            }
        ]);

        const classes = useStyles();
    
     return(
    <List className={classNames(css.chatList,classes.root)}>
       { contacts.map( 
           (contact,index)=>
        <div key={index}>
        <ListItem key={index} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={contact.picture} />
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
              {contact.name}
              </Typography>
              <Typography
                component="span"
                className={classNames(classes.root,classes.lastMessage)}
              >
            {" — I'll be in your neighborhood doing errands this…"}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
        </div>
        )}
    </List>
    )
}

export default ChatList;