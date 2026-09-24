import styles from "./Window.module.css";
import {useEffect, useState} from "react";
import WindowImage1 from '../../assets/window/window1.png'
import WindowImage2 from '../../assets/window/window2.png'

export const Window = () => {
    const windowFrames = [WindowImage1, WindowImage2]

    const [weather, setWeather] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setWeather((prevIndex) => {
                return (prevIndex + 1) % windowFrames.length;
            });
        }, 10000);

        return () => clearInterval(timer);
    }, [windowFrames.length]);

    return (
        <img
            src={windowFrames[weather]}
            alt="WindowImage"
            className={styles.window}
        />
    );
};
