import React, {useEffect, useState} from "react";
import "./styles.css";
import Chat from "./Chat";
import Player from "./Player";
import Hat from "./Hat";
import Field from "./Field";
import Chat_control from "./Chat_control";
import Tool from "./Tool";
import {ws} from "./websocket";
import {GameContext} from "./GameContext"

export default function Screen() {

    const [chat, setChat] = useState('');

    const [player, setPlayer] = useState({
        username: '...',
        score: -999
    });

    const [quantity, setQuantity] = useState(0);

    const [something_in_the_hands, setSomething_in_the_hands] = useState('nothing');

    const [arms, setArms] = useState({
        atomic: 0,
        grenade: 0,
        arrow: 0
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
                case 'CHANGE_SCORE_RESPONSE':
                case 'HANDSHAKE_RESPONSE':
                    setPlayer(gotFromBack.body);
                    break;
                case 'CHAT_MESSAGE':
                    setChat(gotFromBack.body);
                    break;
                case 'QUANTITY_OF_VISITORS':
                    setQuantity(gotFromBack.body);
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
            <GameContext.Provider value={[something_in_the_hands, setSomething_in_the_hands,
                arms, setArms, player]}>
                <Player obj={player}/>
                <Hat objPlayer={player}
                     visitorsQuantity={quantity}/>
                <Field/>
                <Chat obj={chat}/>
                <Chat_control obj={player}/>
                <Tool/>
            </GameContext.Provider>
        </div>
    );
}

