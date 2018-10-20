import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCQCKovXoDp23NPQrmKhF-WvSO7jimyQ94",
    authDomain: "testing-e5ba0.firebaseapp.com",
    databaseURL: "https://testing-e5ba0.firebaseio.com",
    projectId: "testing-e5ba0",
    storageBucket: "testing-e5ba0.appspot.com",
    messagingSenderId: "170118146499"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;