import React, { useState }from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [taskin ,settaskin]=useState(TASKS)
  const handleCategoryClick = (items) => {
    if (items === "All") {
      
      settaskin(TASKS);
    } else {
      
      const categoryClicked = TASKS.filter((item) => item.category === items);
      settaskin(categoryClicked);
    }
  };
  

  //
  const [opvalue,setoptvalue]=useState('All');
  const[textValue,settextvalue]=useState("")

  const formSubmit=(e)=>{
    console.log("submitted")
    
    e.preventDefault();
    const formData={"text":textValue,"category":opvalue}
    console.log(formData)
    settaskin([...taskin, formData]);
    settextvalue('');
    setoptvalue("All")
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter handleCategoryClick={handleCategoryClick}
      
      />
      <NewTaskForm formSubmit={formSubmit}
       opvalue={opvalue} setoptvalue={setoptvalue}
        textValue={textValue} settextvalue={settextvalue}/>

      <TaskList taskin={taskin} settaskin={settaskin}/>
    </div>
  );
}

export default App;
