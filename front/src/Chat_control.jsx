import React, {useContext, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";


function Chat_control(props) {
    const username = props.obj.username;
    const [chatControl, setChatControl] = useState('');
    const [setMsgToChat] = useContext(GameContext);
    const handleKeyDown = ev => {
        if (ev.key === 'Enter') {
            let d = new Date();
            let str = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + ' ' + username + ' ' + chatControl;
            setMsgToChat(str);
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