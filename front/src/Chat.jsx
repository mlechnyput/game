import React, {useContext, useState} from "react";
import {GameContext} from "./GameContext";
import "./styles.css";


function Chat() {
    const [chat]=useContext(GameContext);

    return (
        <div className="chat">
            {chat}
        </div>
    );
}

export default Chat;