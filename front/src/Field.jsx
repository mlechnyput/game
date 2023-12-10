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
import grenade_glow1 from "./images/grenade_glow/grenade_glow0001.png"
import grenade_glow2 from "./images/grenade_glow/grenade_glow0002.png"
import grenade_glow3 from "./images/grenade_glow/grenade_glow0003.png"
import grenade_glow4 from "./images/grenade_glow/grenade_glow0004.png"
import grenade_glow5 from "./images/grenade_glow/grenade_glow0005.png"
import grenade_glow6 from "./images/grenade_glow/grenade_glow0006.png"
import grenade_glow7 from "./images/grenade_glow/grenade_glow0007.png"
import grenade_glow8 from "./images/grenade_glow/grenade_glow0008.png"
import grenade_glow9 from "./images/grenade_glow/grenade_glow0009.png"
import grenade_glow10 from "./images/grenade_glow/grenade_glow0010.png"
import grenade_glow11 from "./images/grenade_glow/grenade_glow0011.png"
import grenade_glow12 from "./images/grenade_glow/grenade_glow0012.png"
import grenade_glow13 from "./images/grenade_glow/grenade_glow0013.png"
import grenade_glow14 from "./images/grenade_glow/grenade_glow0014.png"
import grenade_glow15 from "./images/grenade_glow/grenade_glow0015.png"
import grenade_glow16 from "./images/grenade_glow/grenade_glow0016.png"
import grenade_glow17 from "./images/grenade_glow/grenade_glow0017.png"
import grenade_glow18 from "./images/grenade_glow/grenade_glow0018.png"
import grenade_glow19 from "./images/grenade_glow/grenade_glow0019.png"
import grenade_glow20 from "./images/grenade_glow/grenade_glow0020.png"
import arrow_red from "./images/arrows/arrows0001.png";
import arrow_green from "./images/arrows/arrows0002.png";
import arrow_white from "./images/arrows/arrows0003.png";
import arrow_vibro_1 from "./images/vibro/vibro0001.png";
import arrow_vibro_2 from "./images/vibro/vibro0002.png";
import arrow_vibro_3 from "./images/vibro/vibro0003.png";
import arrow_vibro_4 from "./images/vibro/vibro0004.png";
import arrow_vibro_5 from "./images/vibro/vibro0005.png";
import arrow_vibro_6 from "./images/vibro/vibro0006.png";
import arrow_vibro_7 from "./images/vibro/vibro0007.png";
import arrow_vibro_8 from "./images/vibro/vibro0008.png";
import bush_1 from "./images/fon/bush-1.png"
import bush_2 from "./images/fon/bush-2.png"
import bush_3 from "./images/fon/bush-3.png"
import tree_1 from "./images/fon/tree-1.png"
import tree_2 from "./images/fon/tree-2.png"
import stone_1 from "./images/fon/stone-1.png"
import stone_2 from "./images/fon/stone-2.png"
import log_1 from "./images/fon/log-1.png"
import city_3 from "./images/fon/city-3.png"
import city_4 from "./images/fon/city-4.png"
import joe_1 from "./images/joe/joe.png"

function Field() {
    const forest_horizon = 5800;
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
    const [something_in_the_hands, setSomething_in_the_hands, arms, setArms] = useContext(GameContext);
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
     * Включает перпендикулярно прилипшую присоску
     * */
    const [stickIsOn, setStickIsOn] = useState(0);
    /**
     * Включает летящую стрелу
     * */
    const [fly, setFly] = useState(false);
    /**
     * Масссив с фоновыми элеиентами (для ближнего фона)
     * */
    const [fon_elements, setFon_elements] = useState([]);
    /**
     * Из something_in_the_hands перекладываем значение в Ref и устанавливаем персонажа в
     * начальный кадр для выполнения rerender.
     * */
    useEffect(() => {
        if (notShoot) {
            if (something_in_the_hands === 'nothing') {
                electricity_stopped_ref.current = true;
                setKim_control(1);
            } else {
                if (something_in_the_hands === 'arrow') {
                    if (arms.arrow > 0) {
                        setArms({
                            arrow: arms.arrow - 1,
                            atomic: item_in_the_hands_ref.current === 'atomic' ? ++arms.atomic : arms.atomic,
                            grenade: item_in_the_hands_ref.current === 'grenade' ? ++arms.grenade : arms.grenade
                        });
                        item_in_the_hands_ref.current = something_in_the_hands;
                        electricity_stopped_ref.current = true;
                        grenade_glowing_stopped_ref.current = true;
                        setKim_control(6);
                    }
                } else {
                    if (something_in_the_hands === 'grenade') {
                        if (arms.grenade > 0) {
                            setArms({
                                arrow: item_in_the_hands_ref.current === 'arrow' ? ++arms.arrow : arms.arrow,
                                atomic: item_in_the_hands_ref.current === 'atomic' ? ++arms.atomic : arms.atomic,
                                grenade: arms.grenade - 1
                            });
                            item_in_the_hands_ref.current = something_in_the_hands;
                            electricity_stopped_ref.current = true;
                            grenade_glowing_stopped_ref.current = false;
                            runGrenadeGlow().then(r => {
                                /**
                                 * По завершению работы функции снимаем блокировку поворота головы
                                 * */
                                kim_turns_blocked_ref.current = false;
                            });
                        }
                    } else {
                        if (something_in_the_hands === 'atomic') {
                            if (arms.atomic > 0) {
                                setArms({
                                    arrow: item_in_the_hands_ref.current === 'arrow' ? ++arms.arrow : arms.arrow,
                                    atomic: arms.atomic - 1,
                                    grenade: item_in_the_hands_ref.current === 'grenade' ? ++arms.grenade : arms.grenade
                                });
                                item_in_the_hands_ref.current = something_in_the_hands;
                                electricity_stopped_ref.current = false;
                                grenade_glowing_stopped_ref.current = true;
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
        }
    }, [something_in_the_hands]);

    useEffect(() => {
        resetArms();
        getPosition();
        window.addEventListener('resize', getPosition);
        window.addEventListener('mousemove', (e) => getCursor(e));
        item_in_the_hands_ref.current = something_in_the_hands;
        setInterval(kimTurns, 15000);
        generate_fon();
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
            /**
             * Округляем угол до 1-го знака после запятой (возвращает строку)
             * */
            const angle_degree_str = angle_degree.toFixed(1);
            setAngle(Number(angle_degree_str));
            /**
             * Наклоняем торс и летящую стрелу
             * */
            torso_ref.current.style.transform = 'rotate(' + angle_degree + 'deg)';
            arrows_fly_ref.current.style.transform = 'rotate(' + angle_degree + 'deg)';
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
    const item_in_the_hands_ref = useRef('');
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
    /**
     * Ссылка на перпендикулярно прилипшую присоску
     * */
    const arrow_stick_ref = useRef();
    /**
     * Ссылка на город
     * */
    const city_ref = useRef();
    /**
     * Joe Biden
     * */
    const joe_ref = useRef();
    /**
     * Квадрат 15х15 в середине наконечника стрелы для collision detect
     * */
    const arrows_core_ref = useRef();
    /**
     * Прямоугольник, очерчивающий ноги Байдена для collision detect
     * */
    const joe_box_legs_ref = useRef();
    /**
     * Прямоугольник, очерчивающий туловище и голову Байдена для collision detect
     * */
    const joe_box_body_ref = useRef();
    /**
     * Прямоугольник, очерчивающий яблоко на голове Байдена для collision detect
     * */
    const joe_box_apple_ref = useRef();
    /**
     * Прямоугольник, очерчивающий верхнюю часть головы Байдена для collision detect
     * */
    const joe_box_head_ref = useRef();
    /**
     * Для досрочной остановки свечения гранаты
     * */
    const grenade_glowing_stopped_ref = useRef(false);
    const baiden_position_x = useRef(0);
    const game_in_the_beginning = useRef(true);

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

            /**
             * Ставим летящую стрелу
             * */
            arrows_fly_ref.current.style.left = (marker_right_bottom_x * 0.66 - 310) + 'px';
            arrows_fly_ref.current.style.top = (marker_right_bottom_y - 375) + 'px';
            /**
             * Ставим Байдена за пределы окна. Y меняться уже не будет. Х будет изменен в момент выстрела
             * */
            joe_ref.current.style.top = (marker_right_bottom_y - 575) + 'px';
            joe_ref.current.style.left = (marker_right_bottom_x - 2000) + 'px';

        }
    }

    const resetArms = () => {
        setArms({
            atomic: 0,
            grenade: 0,
            arrow: 7
        });
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
        if (notShoot) {
            let delta = ev.deltaY * 0.1;
            let res = power + delta;
            if (res >= 0 && res <= 160) {
                velocity_bar_ref.current.style.height = res + 'px';
                setPower(res);
            }
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

    async function runGrenadeGlow() {
        /**
         *На время работы функции ставим блокировку поворота головы
         * */
        kim_turns_blocked_ref.current = true;
        let i_kim = 56;
        let time = 40;
        while (i_kim <= 81) {
            if (!grenade_glowing_stopped_ref.current) {
                /**
                 * Рисуем свечение
                 * */
                setKim_control(i_kim);
            }
            /**
             * Притормаживаем
             * */
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

    function intersectRect(first, second) {
        var r1 = first.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
        var r2 = second.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

        //CHECK IF THE TWO BOUNDING BOXES OVERLAP
        return !(r2.left > r1.right ||
            r2.right < r1.left ||
            r2.top > r1.bottom ||
            r2.bottom < r1.top);
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
         * Начальное положение Байдена
         * */
        let x_joe_0 = joe_ref.current.offsetLeft;
        let y_joe_0 = joe_ref.current.offsetTop;
        /**
         * Начальное положение города
         * */
        let x_city_0 = city_ref.current.offsetLeft;
        let y_city_0 = city_ref.current.offsetTop;
        /**
         * Коэффициент отставания сдвига города
         * */
        const coefficient_city = 0.7;
        /**
         * У летящей стрелы изменяем центр вращения, чтобы во время полета она накренялась относительно
         * собственного центра тяжести. В результате этого изменения - почему то возникло смещение,
         * которое прямо пропорционально углу наклона. Компенсируем возникшее смещение.
         * */
        let x_arrows_fly_0 = arrows_fly_ref.current.offsetLeft;
        let y_arrows_fly_0 = arrows_fly_ref.current.offsetTop;
        const compensation_x = 315 / 90 * alfa;
        const compensation_y = 110 / 90 * alfa;
        arrows_fly_ref.current.style.transformOrigin = 140 + 'px ' + 42 + 'px';
        arrows_fly_ref.current.style.left = x_arrows_fly_0 + compensation_x + 'px';
        arrows_fly_ref.current.style.top = y_arrows_fly_0 - compensation_y + 'px';
        let beta;
        /**
         * Т.к. в CSS фон уходит на 160 под нижнюю границу, то
         * в калькуляции min_y_forest учитываем 160. И соответственно в проверке
         * цикла заходим вниз не более чем на 140, иначе вылезет белое пятно.
         * */
        const min_y_forest = (-1) * ((forest_vertical - 160) - position.marker_right_bottom.y);
        while (y_forest_0 + delta_y >= min_y_forest - 140) {
            t += time_step_ms / 140;
            delta_x = V_0_x * t;
            delta_y = V_0_y * t - g * t * t / 2;
            /**
             * Меняем угол наклона стрелы
             * */
            beta = (180 / Math.PI) * Math.atan((V_0_y - g * t) / V_0_x);
            arrows_fly_ref.current.style.transform = 'rotate(' + beta + 'deg)';
            /**
             * Меняем координаты фонов и персонажа
             * */
            forest_ref.current.style.left = (x_forest_0 + delta_x) + 'px';
            forest_ref.current.style.top = (y_forest_0 + delta_y) + 'px';
            city_ref.current.style.left = (x_city_0 + coefficient_city * delta_x) + 'px';
            city_ref.current.style.top = (y_city_0 + coefficient_city * delta_y) + 'px';
            legs_ref.current.style.left = (x_legs_0 + delta_x) + 'px';
            legs_ref.current.style.top = (y_legs_0 + delta_y) + 'px';
            legs_folded_1_ref.current.style.left = (x_legs_folded_1_0 + delta_x) + 'px';
            legs_folded_1_ref.current.style.top = (y_legs_folded_1_0 + delta_y) + 'px';
            torso_ref.current.style.left = (x_torso_0 + delta_x) + 'px';
            torso_ref.current.style.top = (y_torso_0 + delta_y) + 'px';
            joe_ref.current.style.left = (x_joe_0 + delta_x) + 'px';
            joe_ref.current.style.top = (y_joe_0 + delta_y) + 'px' + '';
            /**
             * Проверяем попала ли стрела в ногу Байдена
             * */
            if (intersectRect(arrows_core_ref.current, joe_box_legs_ref.current)) {
                return {
                    coord_x: arrows_fly_ref.current.offsetLeft,
                    coord_y: arrows_fly_ref.current.offsetTop,
                    angle_degree: beta,
                    hit_area: 'legs'
                };
            }
            /**
             * Проверяем попала ли стрела в тело Байдена
             * */
            if (intersectRect(arrows_core_ref.current, joe_box_body_ref.current)) {
                return {
                    coord_x: arrows_fly_ref.current.offsetLeft,
                    coord_y: arrows_fly_ref.current.offsetTop,
                    angle_degree: beta,
                    hit_area: 'body'
                };
            }
            /**
             * Проверяем попала ли стрела в яблоко
             * */
            if (intersectRect(arrows_core_ref.current, joe_box_apple_ref.current)) {
                return {
                    coord_x: arrows_fly_ref.current.offsetLeft,
                    coord_y: arrows_fly_ref.current.offsetTop,
                    angle_degree: beta,
                    hit_area: 'apple'
                };
            }
            /**
             * Проверяем попала ли стрела в голову Байдена
             * */
            if (intersectRect(arrows_core_ref.current, joe_box_head_ref.current)) {
                return {
                    coord_x: arrows_fly_ref.current.offsetLeft,
                    coord_y: arrows_fly_ref.current.offsetTop,
                    angle_degree: beta,
                    hit_area: 'head'
                };
            }
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("готово");
                }, time_step_ms)
            });
            let result = await promise;
        }
        /**
         * Стрела попала в землю
         * */
        return {
            coord_x: arrows_fly_ref.current.offsetLeft,
            coord_y: arrows_fly_ref.current.offsetTop,
            angle_degree: beta,
            hit_area: 'ground'
        };
    }

    async function vibrato() {
        let i = 1;
        let time;
        while (i <= 8) {
            if (i === 1) {
                time = 80;
            } else {
                time = 55;
            }
            setStickIsOn(i);
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("готово");
                }, time)
            });
            let result = await promise;
            i++;
        }
    }

    const red = <img src={arrow_red} alt={""}/>;
    const green = <img src={arrow_green} alt={""}/>;
    const white = <img src={arrow_white} alt={""}/>;

    const b_1 = <img key="b_1" src={bush_1} alt={""}/>;
    const b_2 = <img key="b_2" src={bush_2} alt={""}/>;
    const b_3 = <img key="b_3" src={bush_3} alt={""}/>;
    const t_1 = <img key="t_1" src={tree_1} alt={""}/>;
    const t_2 = <img key="t_2" src={tree_2} alt={""}/>;
    const s_1 = <img key="s_1" src={stone_1} alt={""}/>;
    const s_2 = <img key="s_2" src={stone_2} alt={""}/>;
    const l_1 = <img key="l_1" src={log_1} alt={""}/>;
    /**
     * Массив для перетасовки элементов ближнего фона
     * */
    let background_images = [s_1, s_2, t_1, t_2, b_3, l_1];

    const c_1 = <img key="c_1" src={city_4} alt={""}/>;
    const c_2 = <img key="c_2" src={city_3} alt={""}/>;
    const c_3 = <img key="c_3" src={city_4} alt={""}/>;
    const c_4 = <img key="c_4" src={city_3} alt={""}/>;
    const c_5 = <img key="c_5" src={city_4} alt={""}/>;
    const c_6 = <img key="c_6" src={city_3} alt={""}/>;
    const c_7 = <img key="c_7" src={city_4} alt={""}/>;
    const c_8 = <img key="c_8" src={city_3} alt={""}/>;
    /**
     * Массив зданий
     * */
    const buildings_elements = [c_1, c_2, c_3, c_4, c_5, c_6, c_7, c_8];

    const generate_fon = () => {
        /**
         * Перетасовываем элементы массива в случайном порядке
         * */
        background_images.sort(() => Math.random() - 0.5);
        /**
         * Копируем перетасованный масив. В начало вставляем маленький куст,
         * в конец - большой.
         * */
        let arr = background_images.slice();
        arr.unshift(b_1);
        arr.push(b_2);
        setFon_elements(arr);
    }

    const clickAndStart = () => {
        /**
         * Блокируем выстрел если лук не заряжен и блокируем второй выстрел если
         * предыдущий еще не завершился
         * */
        if (item_in_the_hands_ref.current === 'nothing' || click_is_on_ref.current === false) {
            return;
        }
        put_baiden_to_x_pos();
        /**
         * Фиксируем чем произвели выстрел
         * */
        setArrowShootWith(item_in_the_hands_ref.current);
        click_is_on_ref.current = false;
        kim_turns_blocked_ref.current = true;
        setKim_control(55);
        setNotShoot(false);
        setFly(true);
        moveAll().then(r => {
            console.log('Угол: ' + r.angle_degree);
            if (r.hit_area === 'ground') {
                /**
                 * Устанавливаем перпендикулярную присоску. Компенсируем сдвиг
                 * */
                let compensation_x;
                let compensation_y;
                if (r.angle_degree === -90) {
                    compensation_x = 100;
                    compensation_y = -50;
                } else if (r.angle_degree <= -80) {
                    compensation_x = 80;
                    compensation_y = -50;
                } else if (r.angle_degree <= -70) {
                    compensation_x = 60;
                    compensation_y = -58;
                } else if (r.angle_degree <= -60) {
                    compensation_x = 40;
                    compensation_y = -65;
                } else if (r.angle_degree <= -50) {
                    compensation_x = 20;
                    compensation_y = -80;
                } else if (r.angle_degree <= -40) {
                    compensation_x = 5;
                    compensation_y = -95;
                } else if (r.angle_degree <= -30) {
                    compensation_x = -5;
                    compensation_y = -125;
                } else if (r.angle_degree <= -20) {
                    compensation_x = -25;
                    compensation_y = -140;
                } else if (r.angle_degree <= -10) {
                    compensation_x = -40;
                    compensation_y = -165;
                }
                arrow_stick_ref.current.style.left = r.coord_x + compensation_x + 'px';
                arrow_stick_ref.current.style.top = r.coord_y + compensation_y + 'px';
                setFly(false);
                vibrato().then(r => console.log('stick is vertical'));
            } else {
                let compensation_x;
                let compensation_y;
                let rotation;
                /**
                 * additional_y это дополнительное смещение вниз при попадании в голову Байдена, чтобы не было
                 * визуального конфликта с попаданием в яблоко
                 * */
                let additional_y;
                if (r.hit_area === 'head') {
                    additional_y = 15;
                } else {
                    additional_y = 0;
                }

                if (r.hit_area === 'legs' || r.hit_area === 'body' || r.hit_area === 'head') {
                    if (r.angle_degree <= -80) {
                        compensation_x = 195;
                        compensation_y = 30;
                    } else if (r.angle_degree <= -70) {
                        compensation_x = 175;
                        compensation_y = 30;
                    } else if (r.angle_degree <= -60) {
                        compensation_x = 165;
                        compensation_y = 25;
                    } else if (r.angle_degree <= -50) {
                        compensation_x = 150;
                        compensation_y = 20;
                    } else if (r.angle_degree <= -40) {
                        compensation_x = 125;
                        compensation_y = -20;
                    } else if (r.angle_degree <= -30) {
                        compensation_x = 105;
                        compensation_y = -25;
                    } else if (r.angle_degree <= -25) {
                        compensation_x = 100;
                        compensation_y = -30;
                    } else if (r.angle_degree <= -20) {
                        compensation_x = 90;
                        compensation_y = -30;
                    } else if (r.angle_degree <= -10) {
                        compensation_x = 90;
                        compensation_y = -60;
                    } else if (r.angle_degree <= -5) {
                        compensation_x = 90;
                        compensation_y = -70;
                    } else if (r.angle_degree <= 0) {
                        compensation_x = 90;
                        compensation_y = -85;
                    } else if (r.angle_degree <= 20) {
                        compensation_x = 90;
                        compensation_y = -100;
                    }
                    rotation = 90;
                } else {
                    if (r.hit_area === 'apple') {
                        compensation_x = 100;
                        compensation_y = -100;
                        rotation = 90 + r.angle_degree;
                    }
                }

                arrow_stick_ref.current.style.transform = 'rotate(' + rotation + 'deg)';
                arrow_stick_ref.current.style.left = r.coord_x + compensation_x + 'px';
                arrow_stick_ref.current.style.top = r.coord_y + compensation_y + additional_y + 'px';
                setFly(false);
                vibrato().then(res => console.log('hit to ' + r.hit_area));
            }
            /**
             * Через 9 сек старт игры с исходной позиции
             * */
            setTimeout(() => {
                setFly(false);
                kim_turns_blocked_ref.current = false;
                click_is_on_ref.current = true;
                setAngle(0);
                setPower(40);
                setSomething_in_the_hands('nothing');
                item_in_the_hands_ref.current = 'nothing';
                setStickIsOn(0);
                setKim_control(1);
                setStanding_squatting(true);
                arrow_stick_ref.current.style = '';
                torso_ref.current.style = '';
                legs_ref.current.style = '';
                legs_folded_1_ref.current.style = '';
                forest_ref.current.style = '';
                arrows_fly_ref.current.style = '';
                city_ref.current.style = '';
                joe_ref.current.style = '';
                setNotShoot(true);
                getPosition();
                if (arms.atomic + arms.arrow + arms.grenade === 0) {
                    resetArms();
                    generate_fon();
                    game_in_the_beginning.current = true;
                }
            }, 9000);
        });
    }

    const put_baiden_to_x_pos = () => {
        const min_x = 1500;
        const max_x = 4000;
        /**
         * Ставим Байдена. Если новая игра - генерим случайный Х и устанавливаем на него.
         * Если игра не новая - берем Х, сгенерированный ранее.
         * */
        if (game_in_the_beginning.current) {
            let random_x = Math.floor(Math.random() * (max_x - min_x + 1)) + min_x;
            baiden_position_x.current = random_x;
            joe_ref.current.style.left = (position.marker_right_bottom.x - random_x) + 'px';
            game_in_the_beginning.current = false;
            console.log('сгенерил новый х:' + random_x);
        } else {
            joe_ref.current.style.left = (position.marker_right_bottom.x - baiden_position_x.current) + 'px';
            console.log('взял старый х:' + baiden_position_x.current);
        }
    }

    return (
        <div className="field">
            <div className="target">

            </div>
            <div className="you" onWheel={getPower} onClick={clickAndStart}>
                <div className="sky"/>
                <div className="city" ref={city_ref}>
                    <div className="buildings">{buildings_elements.map(c => {
                        return c;
                    })}</div>
                </div>
                <div className="forest" ref={forest_ref}>
                    <div className="grass"/>
                    <div className="bushes">{fon_elements.map(c => {
                        return c;
                    })}</div>
                </div>
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
                    <img src={grenade_glow1} hidden={kim_control !== 56} alt={""}/>
                    <img src={grenade_glow2} hidden={kim_control !== 57} alt={""}/>
                    <img src={grenade_glow3} hidden={kim_control !== 58} alt={""}/>
                    <img src={grenade_glow4} hidden={kim_control !== 59} alt={""}/>
                    <img src={grenade_glow5} hidden={kim_control !== 60} alt={""}/>
                    <img src={grenade_glow6} hidden={kim_control !== 61} alt={""}/>
                    <img src={grenade_glow7} hidden={kim_control !== 62} alt={""}/>
                    <img src={grenade_glow8} hidden={kim_control !== 63} alt={""}/>
                    <img src={grenade_glow9} hidden={kim_control !== 64} alt={""}/>
                    <img src={grenade_glow10} hidden={kim_control !== 65} alt={""}/>
                    <img src={grenade_glow11} hidden={kim_control !== 66} alt={""}/>
                    <img src={grenade_glow12} hidden={kim_control !== 67} alt={""}/>
                    <img src={grenade_glow13} hidden={kim_control !== 68} alt={""}/>
                    <img src={grenade_glow14} hidden={kim_control !== 69} alt={""}/>
                    <img src={grenade_glow15} hidden={kim_control !== 70} alt={""}/>
                    <img src={grenade_glow16} hidden={kim_control !== 71} alt={""}/>
                    <img src={grenade_glow17} hidden={kim_control !== 72} alt={""}/>
                    <img src={grenade_glow18} hidden={kim_control !== 73} alt={""}/>
                    <img src={grenade_glow19} hidden={kim_control !== 74} alt={""}/>
                    <img src={grenade_glow1} hidden={kim_control !== 75} alt={""}/>
                    <img src={grenade_glow2} hidden={kim_control !== 76} alt={""}/>
                    <img src={grenade_glow3} hidden={kim_control !== 77} alt={""}/>
                    <img src={grenade_glow4} hidden={kim_control !== 78} alt={""}/>
                    <img src={grenade_glow5} hidden={kim_control !== 79} alt={""}/>
                    <img src={grenade_glow6} hidden={kim_control !== 80} alt={""}/>
                    <img src={grenade_glow20} hidden={kim_control !== 81} alt={""}/>
                </div>
                <div className="joe" ref={joe_ref}>
                    <img src={joe_1} alt={""}/>
                    <div className="joe_box_legs" ref={joe_box_legs_ref}/>
                    <div className="joe_box_body" ref={joe_box_body_ref}/>
                    <div className="joe_box_apple" ref={joe_box_apple_ref}/>
                    <div className="joe_box_head" ref={joe_box_head_ref}/>
                </div>
                <div className="arrows_fly" ref={arrows_fly_ref}>
                    {!fly ? null :
                        arrowShootWith === 'arrow' ? red :
                            arrowShootWith === 'grenade' ? green :
                                arrowShootWith === 'atomic' ? white :
                                    null}
                    <div className="arrows_core" ref={arrows_core_ref}/>
                </div>
                <div className="arrow_stick" ref={arrow_stick_ref}>
                    <img src={arrow_vibro_1} alt={""} hidden={stickIsOn !== 1}/>
                    <img src={arrow_vibro_2} alt={""} hidden={stickIsOn !== 2}/>
                    <img src={arrow_vibro_3} alt={""} hidden={stickIsOn !== 3}/>
                    <img src={arrow_vibro_4} alt={""} hidden={stickIsOn !== 4}/>
                    <img src={arrow_vibro_5} alt={""} hidden={stickIsOn !== 5}/>
                    <img src={arrow_vibro_6} alt={""} hidden={stickIsOn !== 6}/>
                    <img src={arrow_vibro_7} alt={""} hidden={stickIsOn !== 7}/>
                    <img src={arrow_vibro_8} alt={""} hidden={stickIsOn !== 8}/>
                </div>
            </div>
        </div>
    );
}

export default Field;