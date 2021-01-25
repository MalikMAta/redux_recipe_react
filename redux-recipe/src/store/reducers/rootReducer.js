import {combineReducers} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
// import {authReducer} from './authReducer'
// import {recipeReducers} from './recipeReducer'

const rootReducer = combineReducers ({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    // auth: authReducer,
    // recipe: recipeReducers
})

export default rootReducer