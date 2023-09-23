import TodoItem from "./TodoItem";

function Todos(props) {

  const {
    onDelete,
    newTaskTitle,
    newTaskDesc,
    setNewTaskTitle,
    setNewTaskDesc,
  } = props;

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(newTaskTitle.trim() === '' || newTaskDesc.trim() === ''){
        alert('Please fill in both Task and Description fields');
        return;
    }
    const newTask = {
      sno: props.todos.length + 1,
      title: newTaskTitle,
      desc: newTaskDesc,
    };
    props.onAddTask(newTask); // Call the onAddTask function from props to add the new task
    setNewTaskTitle(""); // Clear the new task title input
    setNewTaskDesc(""); // Clear the new task description input
  };

  return (
    <div className="container my-4">
      <form onSubmit={handleFormSubmit}>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Task
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputEmail3"
              value={newTaskTitle} // Add this line
              onChange={(e) => setNewTaskTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputPassword3"
              value={newTaskDesc} // Add this line
              onChange={(e) => setNewTaskDesc(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
      <hr />
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return <TodoItem todo={todo} onDelete={onDelete} key={todo.sno} />;
          })}
    </div>
  );
}
export default Todos;
