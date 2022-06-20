import { useEffect } from 'react'
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import '../styles/globals.css'
import '../styles/google.css'
// Redux
import chat from "../store/store.js"
import { Provider } from "react-redux";
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

  if(loading) return <AppContainer><Loader /></AppContainer>;
  if(!user) return <AppContainer><Login /></AppContainer>
  return (
    <>
    <Provider store={chat}>
      {/* <AppContainer> */}
        <Navbar/>
        <MainSection>
          <Sidebar/>
          <Component {...pageProps} />
        </MainSection>
      {/* </AppContainer> */}
    </Provider>
    </>
  )
}

export default MyApp;

const AppContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex:1;
  height: calc(100vh);
  width: 100%;
`;

const MainSection = styled.div`
  /* border: 1px solid red; */
  display: flex;
  background-color: whitesmoke;
`;

const Loader = styled(Loading)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;