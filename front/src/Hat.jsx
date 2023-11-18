import React, {useState} from "react";
import "./styles.css";


function Hat(props) {

    return (
        <div className="hat">
            <div className="score">{props.objPlayer.score}</div>
            <div className="people"/>
            <div className="quantity">{props.visitorsQuantity}</div>
            <div className="hat_right"/>
        </div>
    );
}

export default Hat;