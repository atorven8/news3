import firebase from "firebase";

  
  const firebaseConfig = {
    apiKey: "AIzaSyAdCe8wQxt9Nj_jwmor6hH1r4P6dJA-FWI",
    authDomain: "slip-ffde6.firebaseapp.com",
    databaseURL: "https://slip-ffde6-default-rtdb.firebaseio.com",
    projectId: "slip-ffde6",
    storageBucket: "slip-ffde6.appspot.com",
    messagingSenderId: "942425304071",
    appId: "1:942425304071:web:7dff6f2854017c589ccea2"
  };
  
  const app = firebase.initializeApp(firebaseConfig);
  
  export const db = app.firestore();

  export const auth = firebase.auth();