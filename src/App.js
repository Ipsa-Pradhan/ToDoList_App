//import React from 'react';
import React, {useState} from 'react';
import data from "./data.json";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';
import './App.css';
 
function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle =(id) => {
    let list= toDoList.map(task => {
      return task.id === Number(id) ? {...task,complete: !task.complete} : {...task};
    });
    setToDoList(list);
  }
  const handleFilter=() => {
    let newList = toDoList.filter (task => {
      return !task.complete;
    });
    setToDoList(newList);
  }
  const addTask = (userInput ) => {
    let newTask = [...toDoList];
    newTask = [...newTask, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(newTask);
  }
 return (
   <div className="App">
    <p>
    	<h1 style={{margin: '20px', backgroundColor: "greenyellow"}}> To Do List</h1>
      </p>

      <ToDoList toDoList={toDoList} 
      handleToggle={handleToggle} 
      handleFilter={handleFilter}
      />
      <ToDoForm addTask={addTask}/>
   </div>
 );
}
 
export default App;