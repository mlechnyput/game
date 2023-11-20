import React, {useContext, useEffect, useRef, useState} from "react";
import "./styles.css";


function Field() {
    const [position, setPosition] = useState({
        marker_right_bottom: {x: 0, y: 0},
        marker_left_top: {x: 0, y: 0},
        forest: {x: 0, y: 0}
    });

    useEffect(() => {
        getPosition();
        window.addEventListener('resize', getPosition);
    }, []);

    // useEffect(() => {
    //     box_ref.current.style.left = x + 'px';
    //     box_ref.current.style.top = y + 'px';
    // }, [x, y]);

    const forest_ref = useRef();
    const marker_right_bottom_ref = useRef();
    const marker_left_top_ref = useRef();

    const getPosition = () => {
        const forest_x = forest_ref.current.offsetLeft;
        const forest_y = forest_ref.current.offsetTop;
        const marker_right_bottom_x = marker_right_bottom_ref.current.offsetLeft;
        const marker_right_bottom_y = marker_right_bottom_ref.current.offsetTop;
        const marker_left_top_x = marker_left_top_ref.current.offsetLeft;
        const marker_left_top_y = marker_left_top_ref.current.offsetTop;
        const pos = {
            marker_right_bottom: {x: marker_right_bottom_x, y: marker_right_bottom_y},
            marker_left_top: {x: marker_left_top_x, y: marker_left_top_y},
            forest: {x: forest_x, y: forest_y}
        }
        setPosition(pos);
        console.log('forest X:' + forest_x + ', Y:' + forest_y)
    }

    const moveOne = () => {
        let x_forest = position.forest.x;
        x_forest++;
        forest_ref.current.style.left = x_forest + 'px';
        const new_pos = {
            marker_right_bottom: position.marker_right_bottom,
            marker_left_top: position.marker_left_top,
            forest: {x: x_forest, y: position.forest.y}
        }
        setPosition(new_pos);
    }


    return (
        <div className="field">
            <div className="target">
                <button>GO</button>
            </div>
            <div className="you">
                <div className="forest" ref={forest_ref}/>
                <div className="marker_right_bottom" ref={marker_right_bottom_ref}>
                    X:{position.marker_right_bottom.x}, Y:{position.marker_right_bottom.y}
                </div>
                <div className="marker_left_top" ref={marker_left_top_ref}>
                    X:{position.marker_left_top.x}, Y:{position.marker_left_top.y}
                </div>
            </div>
        </div>
    );
}

export default Field;