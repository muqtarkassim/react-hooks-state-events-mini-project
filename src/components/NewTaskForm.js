import React from "react";
import { CATEGORIES } from "../data";
function NewTaskForm({formSubmit,textValue,settextvalue,opvalue,setoptvalue}) {
  const displayCategory=CATEGORIES.map((item,index)=><option key={index}> {item}</option>)
  return (
    <form className="new-task-form" onSubmit={formSubmit}>
      <label>
        Details
        <input type="text" name="text" value={textValue} onChange={(e) => settextvalue(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={opvalue} onChange={(e) => setoptvalue(e.target.value)}>
          {displayCategory/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
