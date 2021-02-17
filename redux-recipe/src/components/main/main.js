import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase"
import RecipeList from '../recipe/RecipeList'

function Main(props) {

  const { recipeList } = props;
  return (

    <>
      <div>
        <Header />
        <RecipeList recipeList={recipeList} />

        {/* {recipeList &&
          recipeList.map((rec) => {
            return (
              <>
                <h1 key={rec.id}>{rec.recipeAuthor}</h1>

                <ul>
                  {rec.recipe.map((sub) => {
                    
                    return (
                      <li>
                   

                         {counter} {sub.ingredients}

                      </li>
                    );
                   
                  })}

                  <h2>{rec.summary}</h2>
                </ul>
              </>
            );
          })} */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    recipeList: state.firestore.ordered.recipeList,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "recipeList" }])
)(Main);
