import { useState } from "react"

const AddTaskForm = ( {finalAddTask, hideForm} ) => {
  let [estPomodoros, setEstPomodoros] = useState(1);
  let [task, setTask] = useState("");
  const addTask = (e)=>{
    e.preventDefault();
    
    const taskInfos = {
      task,
      estPomodoros
    };
    finalAddTask(taskInfos);
  }
  
  return (
    <div className="TaskForm">
      <form action="" onSubmit={addTask}>
        <div className="inputs">
          <input type="text" 
            id="taskTitle" 
            value={task} 
            onChange={(e)=>{setTask(e.target.value)}} 
            autoFocus 
            placeholder="What are you working on ?"/>
          <div>
            <label htmlFor="">Est Pomodoros</label>
            <input type="number" class="num-input" value={estPomodoros} onChange={(e)=>{setEstPomodoros(e.target.value)}}/>
          </div>
        </div>
        <div className="saveButtonCont">
          <button className="cancelButton" onClick={hideForm}>cancel</button>
          <button className="saveButton" type="submit">save</button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskForm