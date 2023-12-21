import React, {useContext, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";


function Hat(props) {
    const {open_winners, setOpen_winners, setOpen_mail} = useContext(GameContext);


    return (
        <div className="hat">
            <div className="score">{props.objPlayer.score}</div>
            <div className="people"/>
            <div className="quantity">{props.visitorsQuantity}</div>
            <div className="winner" onClick={() => {
                setOpen_winners(!open_winners);
                setOpen_mail(false);
            }}/>
            <div className="logo"/>
        </div>
    );
}

export default Hat;