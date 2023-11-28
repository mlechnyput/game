import React, {useContext, useEffect, useRef, useState} from "react";
import "./styles.css";
import {GameContext} from "./GameContext";
import kim1 from "./images/kimm/kimm0001.png";
import kim2 from "./images/kimm/kimm0002.png";
import kim3 from "./images/kimm/kimm0003.png";
import kim4 from "./images/kimm/kimm0004.png";
import kim5 from "./images/kimm/kimm0005.png";
import kim6 from "./images/kimm/kimm0006.png";
import kim7 from "./images/kimm/kimm0007.png";
import kim8 from "./images/kimm/kimm0008.png";
import kim9 from "./images/kimm/kimm0009.png";
import kim10 from "./images/kimm/kimm0010.png";
import kim11 from "./images/kimm/kimm0011.png";
import kim12 from "./images/kimm/kimm0012.png";
import kim13 from "./images/kimm/kimm0013.png";
import kim14 from "./images/kimm/kimm0014.png";
import kim15 from "./images/kimm/kimm0015.png";
import kim16 from "./images/kimm/kimm0016.png";
import kim17 from "./images/kimm/kimm0017.png";
import kim18 from "./images/kimm/kimm0018.png";
import kim19 from "./images/kimm/kimm0019.png";
import kim20 from "./images/kimm/kimm0020.png";
import electricity1 from "./images/electricity/electricity0001.png";
import electricity2 from "./images/electricity/electricity0002.png";
import electricity3 from "./images/electricity/electricity0003.png";
import electricity4 from "./images/electricity/electricity0004.png";
import electricity5 from "./images/electricity/electricity0005.png";
import electricity6 from "./images/electricity/electricity0006.png";
import electricity7 from "./images/electricity/electricity0007.png";
import electricity8 from "./images/electricity/electricity0008.png";
import electricity9 from "./images/electricity/electricity0009.png";
import electricity10 from "./images/electricity/electricity0010.png";
import electricity11 from "./images/electricity/electricity0011.png";
import electricity12 from "./images/electricity/electricity0012.png";
import electricity13 from "./images/electricity/electricity0013.png";
import electricity14 from "./images/electricity/electricity0014.png";
import electricity15 from "./images/electricity/electricity0015.png";
import electricity16 from "./images/electricity/electricity0016.png";
import electricity17 from "./images/electricity/electricity0017.png";
import electricity18 from "./images/electricity/electricity0018.png";
import electricity19 from "./images/electricity/electricity0019.png";
import electricity20 from "./images/electricity/electricity0020.png";
import electricity21 from "./images/electricity/electricity0021.png";
import electricity22 from "./images/electricity/electricity0022.png";
import electricity23 from "./images/electricity/electricity0023.png";
import electricity24 from "./images/electricity/electricity0024.png";
import electricity25 from "./images/electricity/electricity0025.png";
import electricity26 from "./images/electricity/electricity0026.png";
import electricity27 from "./images/electricity/electricity0027.png";
import electricity28 from "./images/electricity/electricity0028.png";
import electricity29 from "./images/electricity/electricity0029.png";
import electricity30 from "./images/electricity/electricity0030.png";
import electricity31 from "./images/electricity/electricity0031.png";
import electricity32 from "./images/electricity/electricity0032.png";
import electricity33 from "./images/electricity/electricity0033.png";
import electricity34 from "./images/electricity/electricity0034.png";
import kim_release from "./images/kim_release/kim2.png";
import arrow_red from "./images/arrows/arrows0001.png";
import arrow_green from "./images/arrows/arrows0002.png";
import arrow_white from "./images/arrows/arrows0003.png";

function Field() {
    const forest_horizon = 5500;
    const forest_vertical = 1000;
    /**
     *Текущий кадр персонажа:
     * 1-5 безо всего
     * 6-10 со стрелой
     * 11-15 с гранатой
     * 16-20 с бомбой
     * 21-54 с электричеством
     * 55 отпустил стрелу
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
    const [power, setPower] = useState(40);
    /**
     * Из компонента Tools в переменную something_in_the_hands передается - что в руке у персонажа:
     * nothing
     * arrow
     * grenade
     * atomic
     * */
    const [something_in_the_hands, setSomething_in_the_hands] = useContext(GameContext);
    /**
     * true - выстрел еще не произведен
     * false - выстрыл произведен
     * */
    const [notShoot, setNotShoot] = useState(true);
    /**
     * Тип стрелы, с которой был произведен выстрел
     * */
    const [arrowShootWith, setArrowShootWith] = useState('');
    /**
     * Из something_in_the_hands перекладываем значение в Ref и устанавливаем персонажа в
     * начальный кадр для выполнения rerender.
     * */
    useEffect(() => {
        if (notShoot) {
            item_in_the_hands_ref.current = something_in_the_hands;
            if (something_in_the_hands === 'nothing') {
                electricity_stopped_ref.current = true;
                setKim_control(1);
            } else {
                if (something_in_the_hands === 'arrow') {
                    electricity_stopped_ref.current = true;
                    setKim_control(6);
                } else {
                    if (something_in_the_hands === 'grenade') {
                        electricity_stopped_ref.current = true;
                        setKim_control(11);
                    } else {
                        if (something_in_the_hands === 'atomic') {
                            electricity_stopped_ref.current = false;
                            runElectricity().then(r => {
                                /**
                                 * По завершению работы функции снимаем блокировку поворота головы
                                 * */
                                kim_turns_blocked_ref.current = false;
                            });
                        }
                    }
                }
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
            mouse.mouse_x < torso_center_x - limit && notShoot) {
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
    /**
     * Для досрочной остановки электричества
     * */
    const electricity_stopped_ref = useRef(false);
    /**
     * Для блокировки двойного выстрела
     * */
    const click_is_on_ref = useRef(true);
    /**
     * Блокировка поворота головы
     * */
    const kim_turns_blocked_ref = useRef(false);
    /**
     * Ссылка на отдельно летящую стрелу
     * */
    const arrows_fly_ref = useRef();

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
        setPosition(pos);

        if (notShoot) {
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
             * X: на 310 левее ноги, У: 565рх от нижнего края
             * */
            torso_ref.current.style.left = (marker_right_bottom_x * 0.66 - 310) + 'px';
            torso_ref.current.style.top = (marker_right_bottom_y - 565) + 'px';
        }
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
        let delta = ev.deltaY * 0.1;
        let res = power + delta;
        if (res >= 0 && res <= 160) {
            velocity_bar_ref.current.style.height = res + 'px';
            setPower(res);
        }
    }

    async function runElectricity() {
        /**
         *На время работы функции ставим блокировку поворота головы
         * */
        kim_turns_blocked_ref.current = true;
        let i_kim = 21;
        let time;
        while (i_kim <= 54) {
            if (!electricity_stopped_ref.current) {
                /**
                 * Рисуем электричество
                 * */
                setKim_control(i_kim);
            }
            if (i_kim === 22) {
                time = 90
            } else {
                if (i_kim === 24) {
                    time = 60;
                } else {
                    if (i_kim === 31 || i_kim === 32 || i_kim === 33) {
                        time = 30;
                    } else {
                        if (i_kim === 34 || i_kim === 35) {
                            time = 50;
                        } else {
                            time = 40;
                        }
                    }
                }
            }
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(i_kim++);
                }, time)
            });
            let result = await promise;
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
                } else {
                    if (item_in_the_hands_ref.current === 'grenade') {
                        shift = 10;
                    } else {
                        if (item_in_the_hands_ref.current === 'atomic') {
                            shift = 15;
                        }
                    }
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
            if (!kim_turns_blocked_ref.current) {
                /**
                 * Поворот головы
                 * */
                setKim_control(i_kim + shift);
            }
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(i_kim++);
                }, time)
            });
            let result = await promise;
        }
    }

    async function moveAll() {
        /**
         * Ускорение св. падения
         * */
        const g = 9.8;
        /**
         * Угол
         * */
        const alfa = angle;
        /**
         * Начальная скорость
         * */
        const V_0 = power * 1.1 + 33;
        const V_0_x = V_0 * Math.cos(alfa * Math.PI / 180);
        const V_0_y = V_0 * Math.sin(alfa * Math.PI / 180);
        /**
         * Время с начала движения
         * */
        let t = 0;
        /**
         * Шаг времени
         * */
        const time_step_ms = 10;
        /**
         * Начальное положение фона
         * */
        const x_forest_0 = position.forest.x;
        const y_forest_0 = position.forest.y;
        /**
         * Положение относительно начального
         * */
        let delta_x = 0;
        let delta_y = 0;
        /**
         * Начальные положения элементов персонажа
         * */
        let x_legs_0 = legs_ref.current.offsetLeft;
        let y_legs_0 = legs_ref.current.offsetTop;
        let x_legs_folded_1_0 = legs_folded_1_ref.current.offsetLeft;
        let y_legs_folded_1_0 = legs_folded_1_ref.current.offsetTop;
        let x_torso_0 = torso_ref.current.offsetLeft;
        let y_torso_0 = torso_ref.current.offsetTop;
        /**
         * Устанавливаем стрелу в начальное положение, исходя из положения торса
         * */
            // arrows_fly_ref.current.style.transformOrigin = 260 + 'px ' + 230 + 'px';

        const arrow_x = 300;
        const arrow_y = 300;
        arrows_fly_ref.current.style.left = arrow_x + 'px';
        arrows_fly_ref.current.style.top = arrow_y + 'px';
        // arrows_fly_ref.current.style.transform = 'rotate(' + alfa + 'deg)';

        const min_y_forest = (-1) * (forest_vertical - position.marker_right_bottom.y);
        while (y_forest_0 + delta_y >= min_y_forest && x_forest_0 + delta_x <= 0) {
            t += time_step_ms / 100;
            delta_x = V_0_x * t;
            delta_y = V_0_y * t - g * t * t / 2;
            /**
             * Меняем угол наклона стрелы
             * */
            let beta = (180 / Math.PI) * Math.atan((V_0_y - g * t) / V_0_x);
            arrows_fly_ref.current.style.transform = 'rotate(' + beta + 'deg)';
            /**
             * Меняем координаты фонов и персонажа
             * */
            forest_ref.current.style.left = (x_forest_0 + delta_x) + 'px';
            forest_ref.current.style.top = (y_forest_0 + delta_y) + 'px';
            legs_ref.current.style.left = (x_legs_0 + delta_x) + 'px';
            legs_ref.current.style.top = (y_legs_0 + delta_y) + 'px';
            legs_folded_1_ref.current.style.left = (x_legs_folded_1_0 + delta_x) + 'px';
            legs_folded_1_ref.current.style.top = (y_legs_folded_1_0 + delta_y) + 'px';
            torso_ref.current.style.left = (x_torso_0 + delta_x) + 'px';
            /**
             * По неизвестным причинам пдчеркивает как дубликат. Чтобы этого не происходило в конце добавил пустую строку
             * */
            torso_ref.current.style.top = (y_torso_0 + delta_y) + 'px' + '';
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("готово");
                }, time_step_ms)
            });
            let result = await promise;
        }
    }

    const red = <img src={arrow_red} alt={""}/>;
    const green = <img src={arrow_green} alt={""}/>;
    const white = <img src={arrow_white} alt={""}/>;

    return (
        <div className="field">
            <div className="target">

            </div>
            <div className="you" onWheel={getPower} onClick={() => {
                /**
                 * Блокируем выстрел если лук не заряжен и блокируем второй выстрел если
                 * предыдущий еще не завершился
                 * */
                if (something_in_the_hands === 'nothing' || click_is_on_ref.current === false) {
                    return;
                }
                /**
                 * Фиксируем чем произвели выстрел
                 * */
                setArrowShootWith(something_in_the_hands);
                click_is_on_ref.current = false;
                kim_turns_blocked_ref.current = true;
                setKim_control(55);
                setNotShoot(false);
                moveAll().then(r => {
                    /**
                     * Через 9 сек старт игры с исходной позиции
                     * */
                    setTimeout(() => {
                        kim_turns_blocked_ref.current = false;
                        click_is_on_ref.current = true;
                        setAngle(0);
                        setPower(40);
                        setSomething_in_the_hands('nothing');
                        setKim_control(1);
                        setStanding_squatting(true);
                        torso_ref.current.style = '';
                        forest_ref.current.style = '';
                        setNotShoot(true);
                        getPosition();
                        console.log('start new')
                    }, 9000);
                });
            }}>
                <div className="sky"/>
                <div className="forest" ref={forest_ref}/>
                <div className="marker_right_bottom" ref={marker_right_bottom_ref}>
                    X:{position.marker_right_bottom.x}, Y:{position.marker_right_bottom.y}
                </div>
                {notShoot ? <div className="you_control">
                    <div className="angle">{angle}</div>
                    <div className="velocity">
                        <div className="velocity_bar" ref={velocity_bar_ref}/>
                    </div>
                </div> : <div/>}
                <div className="legs" ref={legs_ref} hidden={!standing_squatting}/>
                <div className="legs_folded_1" ref={legs_folded_1_ref} hidden={standing_squatting}/>
                <div className="torso" ref={torso_ref}>
                    <img src={kim1} hidden={kim_control !== 1} alt={""}/>
                    <img src={kim2} hidden={kim_control !== 2} alt={""}/>
                    <img src={kim3} hidden={kim_control !== 3} alt={""}/>
                    <img src={kim4} hidden={kim_control !== 4} alt={""}/>
                    <img src={kim5} hidden={kim_control !== 5} alt={""}/>
                    <img src={kim6} hidden={kim_control !== 6} alt={""}/>
                    <img src={kim7} hidden={kim_control !== 7} alt={""}/>
                    <img src={kim8} hidden={kim_control !== 8} alt={""}/>
                    <img src={kim9} hidden={kim_control !== 9} alt={""}/>
                    <img src={kim10} hidden={kim_control !== 10} alt={""}/>
                    <img src={kim11} hidden={kim_control !== 11} alt={""}/>
                    <img src={kim12} hidden={kim_control !== 12} alt={""}/>
                    <img src={kim13} hidden={kim_control !== 13} alt={""}/>
                    <img src={kim14} hidden={kim_control !== 14} alt={""}/>
                    <img src={kim15} hidden={kim_control !== 15} alt={""}/>
                    <img src={kim16} hidden={kim_control !== 16} alt={""}/>
                    <img src={kim17} hidden={kim_control !== 17} alt={""}/>
                    <img src={kim18} hidden={kim_control !== 18} alt={""}/>
                    <img src={kim19} hidden={kim_control !== 19} alt={""}/>
                    <img src={kim20} hidden={kim_control !== 20} alt={""}/>
                    <img src={electricity1} hidden={kim_control !== 21} alt={""}/>
                    <img src={electricity2} hidden={kim_control !== 22} alt={""}/>
                    <img src={electricity3} hidden={kim_control !== 23} alt={""}/>
                    <img src={electricity4} hidden={kim_control !== 24} alt={""}/>
                    <img src={electricity5} hidden={kim_control !== 25} alt={""}/>
                    <img src={electricity6} hidden={kim_control !== 26} alt={""}/>
                    <img src={electricity7} hidden={kim_control !== 27} alt={""}/>
                    <img src={electricity8} hidden={kim_control !== 28} alt={""}/>
                    <img src={electricity9} hidden={kim_control !== 29} alt={""}/>
                    <img src={electricity10} hidden={kim_control !== 30} alt={""}/>
                    <img src={electricity11} hidden={kim_control !== 31} alt={""}/>
                    <img src={electricity12} hidden={kim_control !== 32} alt={""}/>
                    <img src={electricity13} hidden={kim_control !== 33} alt={""}/>
                    <img src={electricity14} hidden={kim_control !== 34} alt={""}/>
                    <img src={electricity15} hidden={kim_control !== 35} alt={""}/>
                    <img src={electricity16} hidden={kim_control !== 36} alt={""}/>
                    <img src={electricity17} hidden={kim_control !== 37} alt={""}/>
                    <img src={electricity18} hidden={kim_control !== 38} alt={""}/>
                    <img src={electricity19} hidden={kim_control !== 39} alt={""}/>
                    <img src={electricity20} hidden={kim_control !== 40} alt={""}/>
                    <img src={electricity21} hidden={kim_control !== 41} alt={""}/>
                    <img src={electricity22} hidden={kim_control !== 42} alt={""}/>
                    <img src={electricity23} hidden={kim_control !== 43} alt={""}/>
                    <img src={electricity24} hidden={kim_control !== 44} alt={""}/>
                    <img src={electricity25} hidden={kim_control !== 45} alt={""}/>
                    <img src={electricity26} hidden={kim_control !== 46} alt={""}/>
                    <img src={electricity27} hidden={kim_control !== 47} alt={""}/>
                    <img src={electricity28} hidden={kim_control !== 48} alt={""}/>
                    <img src={electricity29} hidden={kim_control !== 49} alt={""}/>
                    <img src={electricity30} hidden={kim_control !== 50} alt={""}/>
                    <img src={electricity31} hidden={kim_control !== 51} alt={""}/>
                    <img src={electricity32} hidden={kim_control !== 52} alt={""}/>
                    <img src={electricity33} hidden={kim_control !== 53} alt={""}/>
                    <img src={electricity34} hidden={kim_control !== 54} alt={""}/>
                    <img src={kim_release} hidden={kim_control !== 55} alt={""}/>
                </div>
                <div className="arrows_fly" ref={arrows_fly_ref}>
                    {notShoot ? null :
                        arrowShootWith === 'arrow' ? red :
                            arrowShootWith === 'grenade' ? green :
                                arrowShootWith === 'atomic' ? white :
                                    null}
                </div>
            </div>
        </div>
    );
}

export default Field;