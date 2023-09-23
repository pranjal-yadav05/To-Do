import React, { useEffect, useState } from 'react';
import './App.css';
import Todos from './Todos';

function App() {
  // Define the initial state for todos
  const [todos, setTodos] = useState(
	JSON.parse(localStorage.getItem('todos')) || []
    // {
    //   sno: 1,
    //   title: "go to the mall",
    //   desc: "buy groceries from the mall at 7 pm"
    // },
    // {
    //   sno: 2,
    //   title: "complete the assignment",
    //   desc: "maths assignment is remaining, complete it"
    // }
  );


  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const addTask = (newTask) => {
	const updatedTodos = [...todos, newTask];
	setTodos(updatedTodos);
	saveTodosToLocalStorage(updatedTodos);
	setNewTaskDesc('');
	setNewTaskTitle('');
  }
  
  // Function to delete a task
  const onDelete = (taskToDelete) => {
    // Filter out the task to be deleted from the todos
    const updatedTodos = todos.filter((task) => task.sno !== taskToDelete.sno);
    // Update the state with the filtered todos
    setTodos(updatedTodos);
	saveTodosToLocalStorage(updatedTodos);
  };
  const saveTodosToLocalStorage = (todos) => {
	localStorage.setItem('todos', JSON.stringify(todos));
  }
  useEffect(()=>{
	saveTodosToLocalStorage(todos);
  }, [todos]);

  return (
    <>
      <Todos onAddTask={addTask} todos={todos} onDelete={onDelete} newTaskTitle={newTaskTitle} newTaskDesc={newTaskDesc} setNewTaskTitle={setNewTaskTitle} setNewTaskDesc={setNewTaskDesc} />
    </>
  );
}

export default App;
