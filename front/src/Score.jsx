import React, {useContext, useState} from "react";
import {GameContext} from "./GameContext";
import "./styles.css";


function Score() {
    const [player]=useContext(GameContext);

    return (
        <div className="hat">{player.score}</div>
    );
}

export default Score;