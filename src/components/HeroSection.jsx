import { useState } from "react"

let startDate = null;
const HeroSection = () => {
  let [minuteDisplayed, setMinuteDisplayed] = useState(25);
  let [secondDisplayed, setSecondDisplayed] = useState(0);
  let [timerState, setTimerState] = useState("Start");
  let [keepUpdating, setKeepUpdating] = useState(false);
  let limit = parseTime("59:59");

  function parseTime(s){
    let secArr = s.split(":");
    return parseInt(secArr[0]) * 60 + parseInt(secArr[1]);
  }

  function getDiffInSeconds(startTime, endTime){
    let a = startTime.getMinutes() * 60 + startTime.getSeconds();
    let b = endTime.getMinutes() * 60 + startTime.getSeconds();
    if(b < a){
      return limit - a + b;
    }else if(b > a){
      return b - a;
    }else if(b - a == 0){
      return 0;
    }else{
      alert("invalid data");
    }
  }

  function getFinalTimeToDisplay(s){
    let mins = Math.round(s / 60);
    let secs = Math.round(s % 60);
    let finalTime = `${mins}:${secs}`;
    return finalTime;
  }
  
  let startTimer = ()=>{
    if(timerState == "Start"){
      startDate = new Date();
      setTimerState("Pause");
    }else{
      setTimerState("Start");
    }
  }

  let updateTimer = ()=>{
    let currentDate = new Date();
    let currentSeconds = currentDate.getMinutes() *60 + currentDate.getSeconds();
    
    // currentDate.setMinutes(20, 59);
    // return currentDate;
  }
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
            <h3>{minuteDisplayed}</h3>
            <h3>:</h3>
            <h3>{secondDisplayed}</h3>
          </div>
          <div className="timerStateButton">
            <button onClick={startTimer}>{timerState}</button>
          </div>
        </div>
        <div className="currentTask">
          <h5>#1</h5>
          <h4>task name</h4>
        </div>
        <div className="titlesHeader">
          <h3>Tasks</h3>
          <i class="fa-solid fa-list"></i>
        </div>
        <div className="addTaskButton">
          <button><i class="fa-solid fa-plus"></i> Add Task</button>
        </div>
    </div>
  )
}

export default HeroSection