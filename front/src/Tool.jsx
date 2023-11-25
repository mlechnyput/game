import React, {useContext, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";


function Tool() {
    const [something_in_the_hands, setSomething_in_the_hands] = useContext(GameContext);

    return (
        <div className="tool">
            <div className="atomic_num">1</div>
            <div className="atomic"
                 onClick={() => setSomething_in_the_hands('atomic')}/>
            <div className="grenade_num">1</div>
            <div className="grenade"
                 onClick={() => setSomething_in_the_hands('grenade')}/>
            <div className="arrow_num">2</div>
            <div className="arrow"
                 onClick={() => setSomething_in_the_hands('arrow')}/>
            <div className="non"
                 onClick={() => setSomething_in_the_hands('nothing')}/>
        </div>
    );
}

export default Tool;