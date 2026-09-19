import './App.css'
import RoomImage from './assets/room_base.png'
import KeyImageBase from './assets/keyboardBase.png'
import KeyImage1 from './assets/keyboard1.png'
import KeyImage2 from './assets/keyboard2.png'
import ClickSound from './assets/computer-keyboard-text-input_Bh2uk7lK.mp3'
import {useState} from "react";

function App() {

    const keyboardFrames = [
        KeyImageBase,
        KeyImage1,
        KeyImage2,
    ]
    const [frame, setFrame] = useState(0)

    const handleKeyboardClick = () => {
        const audio = new Audio(ClickSound);
        audio.play();
        const totalFrames = keyboardFrames.length;
        const cycles = 6; // Сколько раз прокрутить всю анимацию от начала до конца
        const animationSteps = totalFrames * cycles;
        const delayMs = 200;

        for (let i = 0; i < animationSteps; i++) {
            setTimeout(() => {
                // i % 3 будет выдавать последовательность: 0, 1, 2, 0, 1, 2...
                setFrame(i % totalFrames);
            }, i * delayMs);
        }

        // (Опционально) Возврат к базовому кадру после завершения анимации
        setTimeout(() => {
            setFrame(0);
        }, animationSteps * delayMs);
    }

  return (
      <div className="room">
        <img src={RoomImage} alt="Room" className="roomImage" />

          <img
              src={keyboardFrames[frame]}
              alt=""
              className="keyboard"
              onClick={handleKeyboardClick}
          />

      </div>
  )
}

export default App
