import React, {useState} from "react";
import "./styles.css";


function Chat(props) {

    return (
        <div className="chat">
            {props.obj}
        </div>
    );
}

export default Chat;