import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDhxFJYLORfeQgXT2DpdkOrFd-qMY1KCoI",
    authDomain: "masty-dev-cms.firebaseapp.com",
    projectId: "masty-dev-cms",
    storageBucket: "masty-dev-cms.appspot.com",
    messagingSenderId: "762742619606",
    appId: "1:762742619606:web:41ca949e12169b3375f877",
    measurementId: "G-2VNTGQH592"  
  };
const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };