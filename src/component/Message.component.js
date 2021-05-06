import React, { useState } from "react";

const message = (props) =>{
return (
    <p>{props.message.author}: {props.message.value}</p>
)
}
export default message;