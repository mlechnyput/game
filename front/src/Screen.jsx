import React, {useEffect, useState} from "react";
import frontProperties from "./front.properties.json"
import "./styles.css";
import Chat from "./Chat";
import Player from "./Player";
import Score from "./Score";
import {GameContext} from "./GameContext.js";
import Field from "./Field";
import Chat_control from "./Chat_control";
import Tool from "./Tool";

export default function Screen() {

    const [chat, setChat] = useState('')

    const [player, setPlayer] = useState({
        username: '...',
        score: -999
    })

    useEffect(() => {
        const ws = new WebSocket(`${frontProperties.ws_base_url}chat`);

        ws.onopen = function () {
            console.log('connected');
            const obj = {
                type: 'HANDSHAKE_REQUEST'
            };
            const json_msg = JSON.stringify(obj);
            ws.send(json_msg);
        };

        ws.onmessage = function (event) {
            console.log('msg')
            console.log(event.data)
            const gotFromBack = JSON.parse(event.data)
            switch (gotFromBack.type) {
                case 'HANDSHAKE_RESPONSE':
                    setPlayer(gotFromBack.body);
                    break;
                case 'CHAT_MESSAGE':
                    setChat(gotFromBack.body);
                    break;
            }
        };
    }, [])

    return (
        <div className="body">
            <GameContext.Provider value={[chat, player]}>
                <Player/>
                <Score/>
                <Field/>
                <Chat/>
                <Chat_control/>
                <Tool/>
            </GameContext.Provider>
        </div>
    );
}

