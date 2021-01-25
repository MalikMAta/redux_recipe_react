import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./firebase/config";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rrfProps = {
  // this is the firebase config
  firebase,
  //this is for creating user firebase profiles
  config: {
    userProfile: "users", // where profiles are stored in database,
    useFirestoreForProfile: true,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <>
   <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </>,
  document.getElementById("root")
);