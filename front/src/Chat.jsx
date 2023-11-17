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
                <div className="chat_item" key={index}>
                    <span className="chat_item_time">{record.time}</span>
                    <span className="chat_item_login"> {record.login} </span>
                    <span className="chat_item_msg">{record.msg}</span>
                </div>
            ))}
        </div>
    );
}

export default Chat;