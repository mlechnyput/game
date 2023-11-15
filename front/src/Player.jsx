import React, {useState} from "react";
import "./styles.css";


function Player(props) {

    return (
        <div className="player">{props.obj.username}</div>
    );
}

export default Player;