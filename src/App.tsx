import './App.css'
import RoomImage from './assets/room_base.png'
import {Cup} from "./components/cup/Cup.tsx";
import {Keyboard} from "./components/keyboard/Keyboard.tsx";
import {Window} from "./components/window/Window.tsx";
import {Cat} from "./components/cat/Cat.tsx";
import {Monitor} from "./components/monitor/Monitor.tsx";

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
