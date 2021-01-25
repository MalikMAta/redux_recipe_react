import {combineReducer} from 'redux'
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'
import {authReducer} from 'authReducer'
import {recipeReducer} from 'recipeReducer'

const rootReducer = combineReducer ({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    recipe: recipeReducer
})