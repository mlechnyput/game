import React, {useContext, useEffect, useRef, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";


function Field() {
    const forest_horizon = 3500;
    const forest_vertical = 1000;
    /**
     *Текущий кадр персонажа
     * */
    const [kim_control, setKim_control] = useState(1);
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
    /**
     * true - стоит
     * false - сидит на кортчочках
     * */
    const [standing_squatting, setStanding_squatting] = useState(true);

    /**
     * Угол наклона торса
     * */
    const [angle, setAngle] = useState(0);

    /**
     *Сила выстрела. От 0 до 160
     * */
    const [power, setPower] = useState(10);
    /**
     * Из компонента Tools в переменную something_in_the_hands передается - что в руке у персонажа:
     * nothing
     * arrow
     * granada
     * atomic
     * */
    const [something_in_the_hands, setSomething_in_the_hands] = useContext(GameContext);
    /**
     * Из something_in_the_hands перекладываем значение в Ref и устанавливаем персонажа в
     * начальный кадр для выполнения rerender.
     * */
    useEffect(() => {
        item_in_the_hands_ref.current = something_in_the_hands;
        if (something_in_the_hands === 'nothing') {
            setKim_control(1);
        } else {
            if (something_in_the_hands === 'arrow') {
                setKim_control(6);
            }
        }
    }, [something_in_the_hands]);

    useEffect(() => {
        getPosition();
        window.addEventListener('resize', getPosition);
        window.addEventListener('mousemove', (e) => getCursor(e));
        item_in_the_hands_ref.current = something_in_the_hands;
        setInterval(kimTurns, 15000);
    }, []);

    useEffect(() => {
        /**
         * Ограничитель макимального угла наклона
         * */
        const limit = 0;
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
            mouse.mouse_x < torso_center_x - limit) {
            const pril_katet = torso_center_x - mouse.mouse_x;
            const protivol_katet = torso_center_y - mouse.mouse_y;
            const tg = protivol_katet / pril_katet;
            const angle_radian = Math.atan(tg);
            const angle_degree = 180 / Math.PI * angle_radian;
            setAngle(Math.round(angle_degree));
            /**
             * Наклоняем торс
             * */
            torso_ref.current.style.transform = 'rotate(' + angle_degree + 'deg)';
            if (angle_degree > 40) {
                /**
                 * Если угол > 40, то усаживаем на корточки
                 * */
                setStanding_squatting(false);
            } else {
                setStanding_squatting(true);
            }
        }
    }, [mouse]);

    const forest_ref = useRef();
    const marker_right_bottom_ref = useRef();
    const legs_ref = useRef();
    const legs_folded_1_ref = useRef();
    const torso_ref = useRef();
    const velocity_bar_ref = useRef();
    const item_in_the_hands_ref = useRef();

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
         * В координатной сетке окошка "you" ставим ноги на землю.
         * X: треть от правого края, У: 280рх от нижнего края
         * (стопы ног на 120рх выше нижнего края).
         * */
        legs_ref.current.style.left = marker_right_bottom_x * 0.66 + 'px';
        legs_ref.current.style.top = (marker_right_bottom_y - 280) + 'px';

        legs_folded_1_ref.current.style.left = marker_right_bottom_x * 0.66 - 20 + 'px';
        legs_folded_1_ref.current.style.top = (marker_right_bottom_y - 265) + 'px';

        /**
         * В координатной сетке окошка "you" ставим торс.
         * X: на 210 левее ноги, У: 565рх от нижнего края
         * */
        torso_ref.current.style.left = (marker_right_bottom_x * 0.66 - 210) + 'px';
        torso_ref.current.style.top = (marker_right_bottom_y - 565) + 'px';

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

    async function kimTurns() {
        let i_kim = 1;
        while (i_kim < 6) {
            /**
             * shift смещает последовательность кадров, в зависимости от того, что находится в руках
             * */
            let shift;
            if (item_in_the_hands_ref.current === 'nothing') {
                shift = 0;
            } else {
                if (item_in_the_hands_ref.current === 'arrow') {
                    shift = 5;
                }
            }
            let time;
            switch (i_kim) {
                case 1:
                    time = 10000;
                    break;
                case 2:
                    time = 80;
                    break;
                case 3:
                    time = 30;
                    break;
                case 4:
                    time = 40;
                    break;
                case 5:
                    time = 0;
                    break;
            }
            setKim_control(i_kim + shift);
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(i_kim++);
                }, time)
            });
            let result = await promise;
        }
    }

    async function moveAll() {
        let x_forest = position.forest.x;
        let x_legs = legs_ref.current.offsetLeft;
        let x_legs_folded_1 = legs_folded_1_ref.current.offsetLeft;
        let x_torso = torso_ref.current.offsetLeft;
        const step = 5;
        const max = x_forest + 2000;
        while (x_forest < max) {
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    x_forest += step;
                    x_legs += step;
                    x_torso += step;
                    x_legs_folded_1 += step;
                    forest_ref.current.style.left = x_forest + 'px';
                    legs_ref.current.style.left = x_legs + 'px';
                    legs_folded_1_ref.current.style.left = x_legs_folded_1 + 'px';
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
                <div className="legs" ref={legs_ref} hidden={!standing_squatting}/>
                <div className="legs_folded_1" ref={legs_folded_1_ref} hidden={standing_squatting}/>
                <div className="torso" ref={torso_ref}>
                    <div className="kim1" hidden={kim_control !== 1}/>
                    <div className="kim2" hidden={kim_control !== 2}/>
                    <div className="kim3" hidden={kim_control !== 3}/>
                    <div className="kim4" hidden={kim_control !== 4}/>
                    <div className="kim5" hidden={kim_control !== 5}/>
                    <div className="kim6" hidden={kim_control !== 6}/>
                    <div className="kim7" hidden={kim_control !== 7}/>
                    <div className="kim8" hidden={kim_control !== 8}/>
                    <div className="kim9" hidden={kim_control !== 9}/>
                    <div className="kim10" hidden={kim_control !== 10}/>
                </div>
            </div>
        </div>
    );
}

export default Field;