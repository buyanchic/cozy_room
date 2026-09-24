import styles from './Cat.module.css'
import {useState} from "react";
import CatImage1 from '../../assets/cat/cat.png'
import {changeClick} from "../../utils/change.ts";

export const Cat = () => {
    const catFrames = [CatImage1]

    const [cat, setCat] = useState(0);

    return (
        <img
            src={catFrames[cat]}
            alt="WindowImage"
            className={styles.cat}
            onClick={() => changeClick(catFrames, setCat)}
        />
    );
};
