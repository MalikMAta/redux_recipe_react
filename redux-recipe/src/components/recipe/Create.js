import React, { useState } from "react";

function Create() {
  const { recipe, setRecipe } = useState({ ingredients: "", steps: "" });

  const handleChange = () => {
    console.log("ff");
  };
  return (
    <div className="create">
      <p>Want to add a new recipe?</p>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <button className="btn col s12  z-depth-5 ">
              Add new ingredient
            </button>
            <div className="input-field col s12">
              <input type="text" />
              <label for="text">Textarea</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                value={recipe.ingredients}
                placeholder="ingredients"
                name="ingredients"
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="btn col s4 offset-s4 z-depth-5 ">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
