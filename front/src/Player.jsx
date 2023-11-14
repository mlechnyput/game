import React, {useContext, useState} from "react";
import {GameContext} from "./GameContext";
import "./styles.css";


function Player() {
    const [player]=useContext(GameContext);

    return (
        <div className="player">{player.username}</div>
    );
}

export default Player;