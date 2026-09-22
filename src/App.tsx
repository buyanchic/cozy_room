import './App.css'
import RoomImage from './assets/room_base.png'
import {Cup} from "./cup/Cup.tsx";
import {Keyboard} from "./keyboard/Keyboard.tsx";
import {Window} from "./window/Window.tsx";
import {Cat} from "./cat/Cat.tsx";
import {Monitor} from "./monitor/Monitor.tsx";

function App() {

  return (
      <div className="room">
        <img src={RoomImage} alt="Room" className="roomImage" />
          <Window />
          <Keyboard />
          <Cup />
          <Cat />
          <Monitor />
      </div>
  )
}

export default App
