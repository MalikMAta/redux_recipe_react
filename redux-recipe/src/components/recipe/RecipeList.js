import React from "react";
import RecipeSummary from "./RecipeSummary";

function RecipeLIst({ recipeList }) {
  return (
    <div className="rowL">
      {recipeList &&
        recipeList.map((recipes) => {
            return(
          <div className="indiv-recipe z-depth-1">
            <RecipeSummary recipeList={recipeList} />
          
          </div>
            )
        })}
    </div>
  );
}

export default RecipeLIst;
