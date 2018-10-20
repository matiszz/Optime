import firebase from 'firebase';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBIMo8HjMcrHhzRa1X-EQ6qID4mTgW7txA",
    authDomain: "optime-28462.firebaseapp.com",
    databaseURL: "https://optime-28462.firebaseio.com",
    projectId: "optime-28462",
    storageBucket: "optime-28462.appspot.com",
    messagingSenderId: "350884789935"
};

var fire = firebase.initializeApp(config);
const auth = firebase.auth();

export { auth, fire };