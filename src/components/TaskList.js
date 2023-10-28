import React, { useState } from "react";
import Task from "./Task"
import { TASKS } from "../data";


function TaskList({taskin,settaskin}) {
  const deleteTask = (index) => {
    const updatedTasks = taskin.filter((_, taskIndex) => taskIndex !== index);
    settaskin(updatedTasks);
  };

 // const [taskin ,settaskin]=useState(TASKS)
  const displayTask=taskin.map((item,index)=><Task key={index} category={item.category} text={item.text} index={index}
  deleteTask={deleteTask} />)
  return (
    <div className="tasks">

      {displayTask/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
