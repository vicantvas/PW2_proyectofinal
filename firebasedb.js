import firebase from 'firebase';
import 'firebase/firestore';

  var firebaseConfig = {
    apiKey: "AIzaSyAY4AocPvcaLzyzlOgF5wGbFBRUSGbNUUU",
    authDomain: "pwproyectofinal.firebaseapp.com",
    databaseURL: "https://pwproyectofinal.firebaseio.com",
    projectId: "pwproyectofinal",
    storageBucket: "pwproyectofinal.appspot.com",
    messagingSenderId: "8038279660",
    appId: "1:8038279660:web:f1dddd4b27d44c33c178c9"
  };
firebase.initializeApp(firebaseConfig);


export default firebase;