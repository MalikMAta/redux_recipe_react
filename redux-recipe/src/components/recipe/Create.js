import React, { useState } from "react";
import { connect } from "react-redux";
import { createRecipe } from "../../store/actions/recipeAction";

// import { reduxFirebase } from "react-redux-firebase";

function Create(props) {
  const [list, setList] = useState([{ ingredients: "" }]);
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeInput = (index, e) => {
    const { name, value } = e.target;
    const listNumber = [...list];
    listNumber[index][name] = value;
    setList(listNumber);
  };

  const handleAdd = () => {
    setList([...list, { ingredients: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipePost = { list, summary, title };
    props.createRecipe(recipePost);
 props.history.push('/')
  };
  return (
    <div className="create">
      <p>Want to add a new recipe?</p>
      <div className="row">
        {/* <button className="btn col s12  z-depth-5 " onClick={handleAdd}>
          Add new ingredient
        </button> */}
        <div className="input-field col s12">
          <input
            type="text"
            placeholder="Title"
            name="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {list.map((items, index) => {
          return (
            <form className="col s12" key={index}>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    type="text"
                    placeholder="ingredients"
                    name="ingredients"
                    value={items.ingredients}
                    onChange={(event) => handleChangeInput(index, event)}
                  />
                </div>

                <input type="button" value="Add" onClick={handleAdd} />
              </div>
            </form>
          );
        })}

        <div className="row">
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              type="textarea"
              placeholder="Steps"
              // value={summary.steps}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>
        </div>
        <button
          className="btn col s4 offset-s4 z-depth-5 "
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {JSON.stringify(list, null, 2)}
      <br></br>
      {JSON.stringify(summary, null, 2)}

      <br></br>
      {JSON.stringify(title, null, 2)}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe)),
  };
};
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
