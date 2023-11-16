import React, {useEffect, useState} from "react";
import "./styles.css";
import Chat from "./Chat";
import Player from "./Player";
import Score from "./Score";
import Field from "./Field";
import Chat_control from "./Chat_control";
import Tool from "./Tool";
import {ws} from "./websocket";

export default function Screen() {

    const [chat, setChat] = useState('');

    const [player, setPlayer] = useState({
        username: '...',
        score: -999
    });

    useEffect(() => {

        ws.onopen = function () {
            console.log('ws connected');
            const obj = {
                type: 'HANDSHAKE_REQUEST'
            };
            const json_msg = JSON.stringify(obj);
            ws.send(json_msg);
        };

        ws.onmessage = function (event) {
            console.log('msg');
            console.log(event.data);
            const gotFromBack = JSON.parse(event.data);
            switch (gotFromBack.type) {
                case 'HANDSHAKE_RESPONSE':
                    setPlayer(gotFromBack.body);
                    break;
                case 'CHAT_MESSAGE':
                    setChat(gotFromBack.body);
                    break;
            }
        };

        ws.onclose = function (ev) {
            console.log('ws closed');
        };

        ws.onerror = function (ev) {
            console.log('ws error');
        };


    }, [])

    return (
        <div className="body">
                <Player obj={player}/>
                <Score obj={player}/>
                <Field/>
                <Chat obj={chat}/>
                <Chat_control obj={player}/>
                <Tool/>
        </div>
    );
}

