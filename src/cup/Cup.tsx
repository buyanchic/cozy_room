import {useState} from "react";
import styles from './Cup.module.css'
import CupImageBase from '../assets/cup/cup_base.png'
import CupImage1 from '../assets/cup/cup1.png'
import CupImage2 from '../assets/cup/cup2.png'
import CupImage3 from '../assets/cup/cup3.png'
import CupImage4 from '../assets/cup/cup4.png'
import CupImage6 from '../assets/cup/cup6.png'
import CupImage7 from '../assets/cup/cup7.png'
import CupImage8 from '../assets/cup/cup8.png'
import CupImage9 from '../assets/cup/cup9.png'
import CupImage10 from '../assets/cup/cup10.png'
import CupImage11 from '../assets/cup/cup11.png'
import CupImage12 from '../assets/cup/cup12.png'
import {handleClick} from "../utils/animation.ts";

export function Cup() {
    const cupFrames = [
        CupImageBase,
        CupImage1,
        CupImage2,
        CupImage3,
        CupImage4,
        CupImage6,
        CupImage7,
        CupImage8,
        CupImage9,
        CupImage10,
        CupImage11,
        CupImage12,
    ]

    const [cupFrame, setCupFrame] = useState(0)

    return (
        <img
        src={cupFrames[cupFrame]}
        alt="CupImage"
        className={styles.cup}
        onClick={() => handleClick(cupFrames, setCupFrame, 1, 100)}
    />
    )
}