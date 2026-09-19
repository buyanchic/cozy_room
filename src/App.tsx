import './App.css'
import RoomImage from './assets/room_base.png'
import {Cup} from "./cup/Cup.tsx";
import {Keyboard} from "./keyboard/Keyboard.tsx";

function App() {

  return (
      <div className="room">
        <img src={RoomImage} alt="Room" className="roomImage" />
          <Keyboard/>
          <Cup/>
      </div>
  )
}

export default App
