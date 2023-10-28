import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter(props) {
  //const consoleing=()=>{console.log('cliked')}
  const filteredButton=CATEGORIES.map((item,index)=><button onClick={() => props.handleCategoryClick(item)} key={index}> {item}</button>)
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {filteredButton }
    </div>
  );
}

export default CategoryFilter;
