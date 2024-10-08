import React from "react";
import ToDo from "./ToDo";


const ToDoList =({toDoList,handleToggle, handleFilter}) => {
    return(
        <div>
            {toDoList.map(todo => {
                return(
                    <ToDo todo={todo}
                     handleToggle={handleToggle} 
                     handleFilter={handleFilter}
                     />
                )
            }
            )}
            <button style={{margin: '30px', backgroundColor: "greenyellow"}} 
            onClick={handleFilter}>Clear Completed Tasks</button>
        </div>
    )
}
export default ToDoList;
