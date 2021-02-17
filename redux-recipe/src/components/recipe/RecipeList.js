import React from "react";
import RecipeSummary from "./RecipeSummary";
import {Link} from 'react-router-dom'
function RecipeLIst({ recipeList }) {
  return (
    <div className="rowL">
    
    
      {recipeList &&
        recipeList.map((list) => {
            return(
          <div className="indiv-recipe z-depth-1">
          
          
          <Link to={'/recipe/' + list.id}>
            <RecipeSummary list={list} key={list.id} />
          </Link>
          
          </div>
            )
        })}
    </div>
  );
}

export default RecipeLIst;
