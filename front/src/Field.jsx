import React, {useEffect, useRef, useState} from "react";
import "./styles.css";


function Field() {
    const forest_horizon = 3500;
    const forest_vertical = 1000;

    /**
     * marker_right_bottom фактически содержит размеры окошка "you" по горизонтали и вертикали
     * */
    const [position, setPosition] = useState({
        marker_right_bottom: {x: 0, y: 0},
        forest: {x: 0, y: 0}
    });

    /**
     * Слушатель мышки пишет в состояние координаты мышки (х,у),
     * измеренные в координатной сетке изображения forest,
     * где верхний левый угол картинки = (0,0)
     * */
    const [mouse, setMouse] = useState({
        mouse_x: 0,
        mouse_y: 0
    });


    const [angle, setAngle] = useState(0);

    /**
     *Сила выстрела. От 0 до 160
     * */
    const [power, setPower] = useState(10);

    useEffect(() => {
        getPosition();
        window.addEventListener('resize', getPosition);
        window.addEventListener('mousemove', (e) => getCursor(e));
    }, []);

    useEffect(() => {
        /**
         * Центр торса в координатной сетке изображения forest
         * */
        const torso_center_x = forest_horizon - (position.marker_right_bottom.x * 0.33);
        const torso_center_y = 595;
        /**
         * Мышка должна попасть в прямоугольник, диагональ которого проходит
         * от верхнего левого угла "you" до середины торса
         * */
        if (mouse.mouse_y < torso_center_y &&
            mouse.mouse_x < torso_center_x) {
            const pril_katet = torso_center_x - mouse.mouse_x;
            const protivol_katet = torso_center_y - mouse.mouse_y;
            const tg = protivol_katet / pril_katet;
            const angle_radian = Math.atan(tg);
            const angle_degree = 180 / Math.PI * angle_radian;
            setAngle(Math.round(angle_degree));
            /**
             * Поворачиваем торс
             * */
            torso_ref.current.style.transform = 'rotate(' + angle_degree + 'deg)';
        }
    }, [mouse]);

    const forest_ref = useRef();
    const marker_right_bottom_ref = useRef();
    const legs_ref = useRef();
    const torso_ref = useRef();
    const velocity_bar_ref = useRef();

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
         * В координатной сетке окошка "you"
         * ставим ноги на землю (высота ног 160).
         * X: треть от правого края, У: 280рх от нижнего края
         * (стопы ног на 120рх выше нтжнего края).
         * */
        legs_ref.current.style.left = marker_right_bottom_x * 0.66 + 'px';
        legs_ref.current.style.top = (marker_right_bottom_y - 280) + 'px';
        /**
         * В координатной сетке окошка "you"
         * ставим торс (высота торса 250).
         * X: на 75 левее ноги, У: 530рх от нижнего края
         * */
        torso_ref.current.style.left = (marker_right_bottom_x * 0.66 - 75) + 'px';
        torso_ref.current.style.top = (marker_right_bottom_y - 530) + 'px';
        setPosition(pos);
    }

    const getCursor = (ev) => {
        const target = ev.target;
        if (target.className === 'forest') {
            const rect = target.getBoundingClientRect();
            const mouse_x = ev.clientX - rect.left;
            const mouse_y = ev.clientY - rect.top;
            setMouse({
                mouse_x: mouse_x,
                mouse_y: mouse_y
            })
        }
    }

    const getPower = (ev) => {
        ev.preventDefault();
        let delta = ev.deltaY * 0.1;
        let res = power + delta;
        if (res >= 0 && res <= 160) {
            velocity_bar_ref.current.style.height = res + 'px';
            setPower(res);
        }
    }

    async function moveAll() {
        let x_forest = position.forest.x;
        let x_legs = position.marker_right_bottom.x * 0.66;
        let x_torso = x_legs - 75;
        const step = 5;
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
                <div>
                    <p>Mouse X:{mouse.mouse_x}, Y:{mouse.mouse_y}</p>
                </div>
                <div>
                    <p>Power:{power}</p>
                </div>
            </div>
            <div className="you" onWheel={getPower}>
                <div className="sky"/>
                <div className="forest" ref={forest_ref}/>
                <div className="marker_right_bottom" ref={marker_right_bottom_ref}>
                    X:{position.marker_right_bottom.x}, Y:{position.marker_right_bottom.y}
                </div>
                <div className="you_control">
                    <div className="angle">{angle}</div>
                    <div className="velocity">
                        <div className="velocity_bar" ref={velocity_bar_ref}/>
                    </div>
                </div>
                <div className="legs" ref={legs_ref}/>
                <div className="torso" ref={torso_ref}/>
            </div>
        </div>
    );
}

export default Field;