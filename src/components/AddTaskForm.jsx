import { useState } from "react"

const AddTaskForm = ( {addTask} ) => {
  let [estPomodoros, setEstPomodoros] = useState(1);
  return (
    <div className="TaskForm">
      <form action="" onSubmit={addTask}>
        <div className="inputs">
          <input type="text" id="taskTitle" autoFocus placeholder="What are you working on ?"/>
          <div>
            <label htmlFor="">Est Pomodoros</label>
            <input type="number" class="num-input" value={estPomodoros} onChange={(e)=>{setEstPomodoros(e.target.value)}}/>
          </div>
        </div>
        <div className="saveButtonCont">
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskForm