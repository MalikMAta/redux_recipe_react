const recipeReducer = (state = {}, action) =>
{
    switch(action.type){
        case 'CREATE_RECIPE':
            console.log('Created a recipe', action.project)
            return state; 
        case 'CREATE_RECIPE_ERROR':
            console.log('Create recipe Error')
        break
        default:
                return state;

    }
}

export default recipeReducer