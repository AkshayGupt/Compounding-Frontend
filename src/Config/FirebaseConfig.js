import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyByHbYvmCy7WShVhBxWPEUKIGb-P51mxtU",
    authDomain: "compounding-c9480.firebaseapp.com",
    projectId: "compounding-c9480",
    storageBucket: "compounding-c9480.appspot.com",
    messagingSenderId: "159017755221",
    appId: "1:159017755221:web:0361f47d7a6a05b6a52adc",
    measurementId: "G-12V86750HD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  export default firebase;