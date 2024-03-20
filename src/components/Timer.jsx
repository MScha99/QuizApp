import { useState, useEffect} from "react"
import "./Timer.css";

function Timer () {
const [counter, setCounter] = useState(100)

useEffect(()=> {
    setInterval(() =>{
        setCounter((cur) => cur - 1)
    }, 1000)
    
    
}, [])


    return (
<div className="timer-container">
      <div className="time-text">Pozostało {counter  >=0 ? counter : 0} sekund</div>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${counter}%` }}
        ></div>
      </div>
    </div>
    );
}

export default Timer