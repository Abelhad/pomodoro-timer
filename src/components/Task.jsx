const Task = ( {singleTask, removeTask} ) => {
  return (
    <div className="singleTask">
      <h3> {singleTask.task} </h3>
      <div>
        <h4>0/{singleTask.estPomodoros} </h4>
          <i onClick={removeTask} class="fa-solid fa-trash"></i>
      </div>
    </div>
  )
}

export default Task