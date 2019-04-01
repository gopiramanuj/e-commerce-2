
import firebase from 'firebase'
import 'firebase/firestore'

 var config = {

    apiKey: "AIzaSyCGB3V36QW-tXxTx_S4XL8HLU-nzyl9PZQ",
    authDomain: "client-221ce.firebaseapp.com",
    databaseURL: "https://client-221ce.firebaseio.com",
    projectId: "client-221ce",
    storageBucket: "client-221ce.appspot.com",
    messagingSenderId: "181915538050"
  };

const firestore = firebase.initializeApp(config);
const db = firebase.firestore();

export default db;