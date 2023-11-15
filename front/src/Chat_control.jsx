import React, {useContext, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";


function Chat_control(props) {
    const username = props.obj.username;
    const [chatControl, setChatControl] = useState('');
    const [setMsgToChat] = useContext(GameContext);

    return (
        <div className="chat_control">
            <input
                value={chatControl}
                type={"text"}
                onChange={event => setChatControl(event.target.value)}/>
            <button
                onClick={function (e) {
                    let d = new Date();
                    let str = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + username + ' ' + chatControl;
                    setMsgToChat(str);
                    setChatControl('');
                }}
            >OK
            </button>
        </div>
    );
}

export default Chat_control;