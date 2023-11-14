import React, {useEffect, useState} from "react";
import frontProperties from "./front.properties.json"
import "./styles.css";

export default function Screen() {

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
            }
        };
    }, [])

    return (
        <div className="body">
            <div className="player">{player.username}</div>
            <div className="hat">{player.score}</div>
            <div className="field">field</div>
            <div className="chat">chat</div>
            <div className="chat_control">chat control</div>
            <div className="tools">tools</div>
        </div>
    );
}

