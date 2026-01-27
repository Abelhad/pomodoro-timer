import { useState } from "react"

const HeroSection = () => {
  let [minute, setMinute] = useState(25);
  let [second, setSecond] = useState(0);
  let [timerState, setTimerState] = useState("Start");
  return (
    <div className="heroSection">
        <div className="customHeader">
            <img src="https://www.tomatotimers.com/assets/images/tomato.svg" alt="" />
        </div>
        <div className="TimeProgress"></div>
        <div className="clock">
            <div className="timerType">
              <button>Pomodoro</button>
              <button>Short Break</button>
              <button>Long Break</button>
            </div>
            <div className="actualTimer">
              <h3>{minute}</h3>
              <h3>:</h3>
              <h3>{second}0</h3>
            </div>
            <div className="timerStateButton">
              <button>{timerState}</button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection