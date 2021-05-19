import React, {useState} from "react";
import css from "./header.css"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChatIcon from '@material-ui/icons/Chat';
import {Link} from "react-router-dom";
import {connect} from 'react-redux'

const Header = (props) => {
    const [name, setName] = useState(props.name)

    return (
        <div>
            <AppBar position="static" className={css.navBar}>
                <Toolbar>
                    <Link to="/profile">
                        <IconButton edge="start" color="inherit">
                            <AccountCircleIcon/>
                        </IconButton>
                    </Link>

                    <span className={css.name}>{name} </span>

                    <Link to="/">
                        <IconButton edge="start" color="inherit">
                            <ChatIcon/>
                        </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = store => ({
    name: store.profile.name,
});

export default connect(mapStateToProps)(Header);