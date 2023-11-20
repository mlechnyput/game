import React, {useEffect, useRef, useState} from "react";
import "./styles.css";


function Field() {
    const [position, setPosition] = useState({
        marker_right_bottom: {x: 0, y: 0},
        forest: {x: 0, y: 0}
    });

    const [mouse, setMouse] = useState({
        mouse_x: 0,
        mouse_y: 0
    });

    useEffect(() => {
        getPosition();
        window.addEventListener('resize', getPosition);
        window.addEventListener('mousemove', (e)=>getCursor(e));
    }, []);

    const forest_ref = useRef();
    const marker_right_bottom_ref = useRef();
    const legs_ref = useRef();
    const torso_ref = useRef();

    const getPosition = () => {
        const forest_x = forest_ref.current.offsetLeft;
        const forest_y = forest_ref.current.offsetTop;
        /**
         * Прибавляем по 120 и получаем координаты нижнего правого угла
         * */
        const marker_right_bottom_x = marker_right_bottom_ref.current.offsetLeft + 120;
        const marker_right_bottom_y = marker_right_bottom_ref.current.offsetTop + 120;
        const pos = {
            marker_right_bottom: {x: marker_right_bottom_x, y: marker_right_bottom_y},
            forest: {x: forest_x, y: forest_y}
        }
        /**
         * Ставим ноги на землю (высота ног 160).
         * X: треть от правого края, У: 280рх от нижнего края
         * (стопы ног на 120рх выше нтжнего края).
         * */
        legs_ref.current.style.left = marker_right_bottom_x * 0.66 + 'px';
        legs_ref.current.style.top = (marker_right_bottom_y - 280) + 'px';
        /**
         * Ставим торс (высота торса 250).
         * X: на 75 левее ноги, У: 530рх от нижнего края
         * */
        torso_ref.current.style.left = (marker_right_bottom_x * 0.66 - 75) + 'px';
        torso_ref.current.style.top = (marker_right_bottom_y - 530) + 'px';
        setPosition(pos);
    }

    const getCursor = (ev) => {
        const target = ev.target;
        const rect = target.getBoundingClientRect();
        const mouse_x = ev.clientX - rect.left;
        const mouse_y = ev.clientY - rect.top;
        setMouse({
            mouse_x: mouse_x,
            mouse_y: mouse_y
        })
    }

    async function moveAll() {
        let x_forest = position.forest.x;
        let x_legs = position.marker_right_bottom.x * 0.66;
        let x_torso = x_legs - 75;
        const step = 10;
        const max = x_forest + 2000;
        while (x_forest < max) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    x_forest += step;
                    x_legs += step;
                    x_torso += step;
                    forest_ref.current.style.left = x_forest + 'px';
                    legs_ref.current.style.left = x_legs + 'px';
                    torso_ref.current.style.left = x_torso + 'px';
                    resolve("готово");
                }, 10)
            });
            let result = await promise;
        }
    }

    return (
        <div className="field">
            <div className="target">
                <button onClick={moveAll}>GO</button>
                <p>Mouse X:{mouse.mouse_x}, Y:{mouse.mouse_y}</p>
            </div>
            <div className="you">
                <div className="sky"/>
                <div className="forest" ref={forest_ref}/>
                <div className="marker_right_bottom" ref={marker_right_bottom_ref}>
                    X:{position.marker_right_bottom.x}, Y:{position.marker_right_bottom.y}
                </div>
                <div className="legs" ref={legs_ref}/>
                <div className="torso" ref={torso_ref}/>
            </div>
        </div>
    );
}

export default Field;