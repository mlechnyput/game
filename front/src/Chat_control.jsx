import React, {useContext, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";


function Chat_control(props) {
    const [setMsgToChat]=useContext(GameContext);

    return (
        <div className="chat_control">{props.obj.txt}</div>
    );
}

export default Chat_control;