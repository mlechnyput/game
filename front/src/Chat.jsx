import React, {useEffect, useState} from "react";
import "./styles.css";


function Chat(props) {
    const [arr, setArr] = useState([]);

    const [changeProps, setChangeProps] = useState('');

    useEffect(() => {
        console.log('chat render');
        setChangeProps(props.obj);
    });

    useEffect(() => {
        console.log('props is changed');
        setArr([...arr, props.obj]);
    }, [changeProps]);

    return (
        <div className="chat">
            {arr.map((record, index) => (
                <div key={index}>{record}</div>
            ))}
        </div>
    );
}

export default Chat;