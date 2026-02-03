import { useState } from "react"

let startDate = new Date();
const HeroSection = () => {
  let [startMin, setStartMins] = useState(startDate.getMinutes());
  let [startSec, setStartSec] = useState(startDate.getSeconds());
  console.log("time :", startMin, startSec);
  let [minuteDisplayed, setMinuteDisplayed] = useState(25);
  let [secondDisplayed, setSecondDisplayed] = useState(0);
  let [timerState, setTimerState] = useState("Start");
  let startTimer = ()=>{
    updateTimer();
    // let newTime = updateTimer();
    // console.log(newTime.getMinutes(), newTime.getSeconds());
  }
  let updateTimer = ()=>{
    let currentDate = new Date();
    let resultSeconds = currentDate.getSeconds() - startDate.getSeconds();
    console.log(59 - resultSeconds);
    setSecondDisplayed(prev =>{
      if(resultSeconds < 60){
        if(resultSeconds > 50){
          return "0" + 59 - resultSeconds;
        }else{
          return 59 - resultSeconds;
        }
      }else{
        resultSeconds = 0;
        return resultSeconds;
      }
      
    })
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