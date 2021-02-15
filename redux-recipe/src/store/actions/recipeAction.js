export const createRecipe = (recipeList) => {

    return(dispatch, getState, {getFirebase}) => {

        const firestore = getFirebase().firestore();
        

        firestore
        .collection("recipeList")
        .add({
            ...recipeList,
            recipeAuthor: "Malik",
            createdBy: new Date(),
        })

        .then(() =>{
            dispatch({
                type: "CREATE_RECIPE",
                recipeList,
            })
        })

        .catch((err) =>{
            dispatch({
                type: "CREATE_RECIPE_ERROR",
                err,
            })
        })
    }

}