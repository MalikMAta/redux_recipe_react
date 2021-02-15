import React, { useState } from "react";
import {connect} from 'react-redux'
import {createRecipe} from '../../store/actions/recipeAction'

// import { reduxFirebase } from "react-redux-firebase";

function Create(props) {
  const [recipe, setRecipe] = useState([]);
  const [summary, setSummary] = useState("");


  const handleChangeInput = (index, e) => {
    const values = [...recipe]
    values[index][e.target.name] = e.target.value
    setRecipe(values)

  }


  const handleAdd = () => {

    const inputState = {
      ingredients: ""

    }
    setRecipe([...recipe, inputState]);
  };


  const handleSubmit = (e) =>{
    e.preventDefault();

    const recipePost = {recipe, summary};
    props.createRecipe(recipePost);



  }
  return (
    <div className="create">
      <p>Want to add a new recipe?</p>
      <div className="row">
        <button className="btn col s12  z-depth-5 " onClick={handleAdd}>
          Add new ingredient
        </button>
        {recipe.map((items, index) => {
          return (
            <form className="col s12" key={index}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    placeholder="ingredients"
                    name="ingredients"
                    value={items.ingredients}
                    onChange = {event => handleChangeInput(index, event)}
                  />
                </div>
              </div>
            </form>
          );
        })}
        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="textarea1" className="materialize-textarea"
              type="textarea"
              placeholder="Steps"
              // value={summary.steps}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
        <button className="btn col s4 offset-s4 z-depth-5 " onClick={handleSubmit}>Submit</button>
      </div>

      {JSON.stringify(recipe, null, 2)}
      <br></br>

      {JSON.stringify(summary)}
    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return{
    createRecipe: (recipeList) => dispatch(createRecipe(recipeList))
  }
}
export default connect(null, mapDispatchToProps)(Create);


  // const handleChangeIngred = (e, index) => {
  //   const { name, value } = e.target;

  //   // prevent overriding
  //   const list = [...recipe];
  //   list[index][name] = value;

  //   setRecipe(list);
  // };

  // const handleChangeSummary = (e, index) => {
  //   const { name, value } = e.target;

  //   // prevent overriding
  //   setSummary({
  //     ...summary,
  //     [name]: value,
  //   });
  // };
