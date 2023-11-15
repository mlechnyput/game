import React, {useEffect, useRef, useState} from "react";
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

    const [chat, setChat] = useState('');

    const [msgToChat, setMsgToChat] = useState('');

    const [player, setPlayer] = useState({
        username: '...',
        score: -999
    });

    const socket = useRef(null);

    useEffect(() => {
        let obj = {
            type: 'CHAT_MESSAGE',
            body: msgToChat
        };
        if (msgToChat.length > 0) {
            socket.current.send(JSON.stringify(obj));
        }
    }, [msgToChat]);


    useEffect(() => {
        const ws = new WebSocket(`${frontProperties.ws_base_url}chat`);

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
                    console.log('chat-->'+chat);
                    const str = chat + '\n' + gotFromBack.body;
                    console.log('str-->'+str);
                    setChat(str);
                    break;
            }
        };

        ws.onclose = function (ev) {
            console.log('ws closed');
        };

        ws.onerror = function (ev) {
            console.log('ws error');
        };

        socket.current = ws;

    }, [])

    return (
        <div className="body">
            <GameContext.Provider value={[setMsgToChat]}>
                <Player obj={player}/>
                <Score obj={player}/>
                <Field/>
                <Chat obj={chat}/>
                <Chat_control obj={player}/>
                <Tool/>
            </GameContext.Provider>
        </div>
    );
}

