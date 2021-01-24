
import firebase from 'firebase/app'
import 'firebase/firestore' // <- needed if using firestore
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBcfLfsnLq9gWO2urGpplJhEKdb8Tid3sM",
    authDomain: "amaneerecipe-a9f5e.firebaseapp.com",
    databaseURL: "https://amaneerecipe-a9f5e-default-rtdb.firebaseio.com",
    projectId: "amaneerecipe-a9f5e",
    storageBucket: "amaneerecipe-a9f5e.appspot.com",
    messagingSenderId: "905839220275",
    appId: "1:905839220275:web:784930ef49830e2d057546",
    measurementId: "G-NBR35PKK1S"
  };
  
  firebase.initializeApp(config)
  firebase.firestore()


  export default firebase