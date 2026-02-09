const AddTaskButton = ( {showAddtaskForm} ) => {
  return (
    <div className="addTaskButton">
        <button onClick={showAddtaskForm}><i class="fa-solid fa-plus"></i> Add Task</button>
    </div>
  )
}

export default AddTaskButton