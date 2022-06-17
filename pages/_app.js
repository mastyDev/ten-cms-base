import { useEffect } from 'react'
import '../styles/globals.css'
import '../styles/google.css'


// firebase import
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth, db } from '../firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth'
//Loading import
import Loading from  '../contexts/Loading';
//Login import
import Login from './login'


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
        username: user.displayName,
        email: user.email,
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        photoURL: user.photoURL,
      }, {merge: true});
    }
  }, [user])

  if(loading) return <Loading />;
  if(!user) return <Login />
  return <Component {...pageProps} />
}

export default MyApp