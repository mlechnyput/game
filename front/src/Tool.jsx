import React, {useContext, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";


function Tool() {
    const {something_in_the_hands, setSomething_in_the_hands, arms} = useContext(GameContext);

    return (
        <div className="tool">
            <div className="atomic_num">{arms.atomic}</div>
            <div className="atomic"
                 onClick={() => setSomething_in_the_hands('atomic')}/>
            <div className="grenade_num">{arms.grenade}</div>
            <div className="grenade"
                 onClick={() => setSomething_in_the_hands('grenade')}/>
            <div className="arrow_num">{arms.arrow}</div>
            <div className="arrow"
                 onClick={() => setSomething_in_the_hands('arrow')}/>
        </div>
    );
}

export default Tool;