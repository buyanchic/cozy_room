import KeyImageBase from '../assets/keyboard/keyboard_base.png'
import KeyImage1 from '../assets/keyboard/keyboard1.png'
import KeyImage2 from '../assets/keyboard/keyboard2.png'
import KeyImage3 from '../assets/keyboard/keyboard3.png'
import KeyImage4 from '../assets/keyboard/keyboard4.png'
import KeyImage5 from '../assets/keyboard/keyboard5.png'
import KeyImage6 from '../assets/keyboard/keyboard6.png'
import ClickSound from '../assets/keyboard/computer-keyboard-text-input_Bh2uk7lK.mp3'
import {useState} from "react";
import styles from './Keyboard.module.css'
import {handleClick} from "../utils/animation.ts";

export function Keyboard() {
    const keyboardFrames = [
        KeyImageBase,
        KeyImage1,
        KeyImage2,
        KeyImage3,
        KeyImage4,
        KeyImage5,
        KeyImage6,
    ]

    const [keyFrame, setKeyFrame] = useState(0)

    return (
        <img
            src={keyboardFrames[keyFrame]}
            alt=""
            className={styles.keyboard}
            onClick={() => handleClick(keyboardFrames, setKeyFrame, 3, 165, ClickSound)}
        />
    )
}