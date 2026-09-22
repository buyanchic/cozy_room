import styles from "../window/Window.module.css";
import {useState} from "react";
import WindowImage1 from '../assets/window/window1.png'
import WindowImage2 from '../assets/window/window2.png'
import {changeClick} from "../utils/change.ts";

export const Window = () => {
    const windowFrames = [WindowImage1, WindowImage2]

    const [weather, setWeather] = useState(0);

    return (
        <img
            src={windowFrames[weather]}
            alt="WindowImage"
            className={styles.window}
            onClick={() => changeClick(windowFrames, setWeather)}
        />
    );
};
