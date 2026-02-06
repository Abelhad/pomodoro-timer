import { useState, useEffect, useRef } from "react"

let startDate = null;
const HeroSection = () => {
  let [minuteDisplayed, setMinuteDisplayed] = useState(25);
  let [secondDisplayed, setSecondDisplayed] = useState(0 + "0");
  let [timerState, setTimerState] = useState("Start");
  let [keepUpdating, setKeepUpdating] = useState(false);
  let [timerType, setTimerType] = useState(25);
  let startTimeRef = useRef(null);
  let pauseTimeRef = useRef(0);
  let TimeDuration = timerType * 60;

  function getDiffInSeconds(){
    let timePassed = Math.floor((Date.now() - startTimeRef.current) / 1000);
    return pauseTimeRef.current + timePassed;
  }

  function getFinalTimeToDisplay(s){
    let mins = Math.floor(s / 60);
    let secs = Math.floor(s % 60);
    let finalTime = `${mins}:${secs}`;
    console.log(finalTime);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  
  let startTimer = ()=>{
    if(timerState == "Start"){
      
      startTimeRef.current = Date.now();
      setTimerState("Pause");
      setKeepUpdating(prev => !prev);
    }else{
      pauseTimeRef.current = getDiffInSeconds();
      setTimerState("Start");
      setKeepUpdating(prev => !prev);
    }
  }

  let updateTimer = ()=>{
    // let currentSeconds = currentDate.getMinutes() *60 + currentDate.getSeconds();
    let diffInSeconds = getDiffInSeconds();
    let remaining = TimeDuration - diffInSeconds;
    let finalTime = getFinalTimeToDisplay(remaining);
    let finalTimeArr = finalTime.split(":");
    setMinuteDisplayed(finalTimeArr[0]);
    setSecondDisplayed(finalTimeArr[1]);

    if(remaining == 0){
      setKeepUpdating(false);
      setTimerState("Start");
      if(timerType == 25){
        setTimerType(5);
      }else{
        setTimerType(25);
      }
    }
    
    // currentDate.setMinutes(20, 59);
    // return currentDate;
  }

  useEffect(()=>{
    let id;
    if(keepUpdating){
      id = setInterval(() => {
        updateTimer();
        console.log("working");
      }, 1000);
    }
    return () => {
      if(id){
        clearInterval(id);
      }
    };
  }, [keepUpdating]);

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