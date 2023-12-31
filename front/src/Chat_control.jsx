import React, {useState} from "react";
import "./styles.css";
import {ws} from "./websocket";

function Chat_control(props) {
    const username = props.obj.username;
    const [chatControl, setChatControl] = useState('');
    const handleKeyDown = ev => {
        if (ev.key === 'Enter' && chatControl.length > 0) {
            let d = new Date();
            let time_msg = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
            ws.send(JSON.stringify({
                type: 'CHAT_MESSAGE',
                body: {
                    time: time_msg,
                    login: username,
                    msg: chatControl
                }
            }));
            setChatControl('');
        }
    }
    return (
        <div className="chat_control">
            <input
                style={{width: '97.4%'}}
                value={chatControl}
                type={"text"}
                onChange={event => setChatControl(event.target.value)}
                onKeyDown={handleKeyDown}/>
        </div>
    );
}

export default Chat_control;