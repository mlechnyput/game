import React, {useState} from "react";
import "./styles.css";


function Score(props) {

    return (
        <div className="hat">{props.obj.score}</div>
    );
}

export default Score;