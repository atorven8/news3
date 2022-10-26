// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1LEQgwbJFsomOfKWcxH2Gi0QUIWXcxbc",
  authDomain: "news-917a1.firebaseapp.com",
  projectId: "news-917a1",
  storageBucket: "news-917a1.appspot.com",
  messagingSenderId: "534557587851",
  appId: "1:534557587851:web:3873b79e6bed41ecfcd78e",
  measurementId: "G-R8PJXEGY2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app