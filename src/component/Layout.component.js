import React from "react";
import Header from "./Header.component";
import css from "./layout.css";
import MessageField from "./MessageField.component";

const Layout = ()=>{
return(
<div className={css.container}>
    <Header></Header> 
    <MessageField></MessageField>
</div>
)
}

export default Layout;