// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMsxgAW3dUSW7kRlKZt0TSZ1CK4t-R-uE",
  authDomain: "shahmeer-portfolio.firebaseapp.com",
  projectId: "shahmeer-portfolio",
  storageBucket: "shahmeer-portfolio.appspot.com",
  messagingSenderId: "483228830460",
  appId: "1:483228830460:web:fc5ba9a767ea844c8d2579",
  measurementId: "G-T5YGTHZ8F4",
};
const storage = firebase.storage();

export { storage, firebase as default };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
