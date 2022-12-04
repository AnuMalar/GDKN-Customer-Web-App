//import a firebase configuration of admin user to login this page
//using googleAuthProvider

import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD-d79wD85BHiHN8ObY-euGVJ9iA6vpJnw",
    authDomain: "anu-n-s.firebaseapp.com",
    databaseURL: "https://anu-n-s-default-rtdb.firebaseio.com",
    projectId: "anu-n-s",
    storageBucket: "anu-n-s.appspot.com",
    messagingSenderId: "118664703573",
    appId: "1:118664703573:web:9d564e4e041a4a4d882edc"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  export{auth,app,provider};  