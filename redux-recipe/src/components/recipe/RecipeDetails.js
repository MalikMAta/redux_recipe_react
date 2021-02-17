import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
function RecipeDetails(props) {
    
    const{recipe} = props


    const data = recipe;
    console.log(data)


    if(recipe){
    return (
        <div className="container">
        <div className="row">
        <div className="col s12"><h2>{recipe.title}</h2></div>
     {data.list.map(mapping => {
                return(
                    <div className="col s12">{mapping.ingredients}</div>
                )
            })}
      
      <h2>{recipe.summary}</h2>
        </div> 
        </div>
    )
    }
    else {
        return (
          <div className="container center">
            <p>Loading project...</p>
            
          </div>
          
        );
      }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipeList;
    const recipe = recipes ? recipes[id] : null;
  
    return {
        recipe: recipe,
    };
  };

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: "recipeList" }])
  )(RecipeDetails);
