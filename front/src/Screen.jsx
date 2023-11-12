import React, {useState} from "react";

import "./styles.css";

export default function Screen() {

    return (
        <div className="body">
            <div className="player">player</div>
            <div className="hat">header</div>
            <div className="field">field</div>
            <div className="chat">chat</div>
            <div className="chat_control">chat control</div>
            <div className="tools">tools</div>
        </div>
    );
}

