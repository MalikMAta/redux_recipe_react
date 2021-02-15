import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { compose } from "redux";
import RecipeList from "../recipe/RecipeList";
import { firestoreConnect } from "react-redux-firebase";

function Main(props) {

    const {recipeList} = props
  return (
    <div>
      <Header />

      <RecipeList recipe ={recipeList} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    recipeList: state.firestore.ordered.recipeList,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "recipeList" }])
)(Main);
