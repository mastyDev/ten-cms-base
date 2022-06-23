import { useEffect, useState,createContext } from 'react'
import styled from "styled-components"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import '../styles/globals.css'
import '../styles/google.css'
// import {TbLayoutSidebarLeftCollapse} from 'react-icons/tb'
// Redux
import ten from "../store/store.js"
import { Provider } from "react-redux";
// import { useSelector } from "react-redux";
// import { sidebarState } from '../store/tenStore';

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


export default function MyApp({ Component, pageProps }) {
  // const AppContext = createContext(true); // Context API
  const [sideMenu, setSideMenu] = useState(true);
  // console.log(sideMenu)

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
    {/* <AppContext.Provider value={{ sideMenu, setSideMenu }}> */}
    <Provider store={ten}>
      {/* <AppContainer> */}
        <NavbarContainer><Navbar sideMenu={sideMenu} sideButton={setSideMenu}/></NavbarContainer>
        <MainSection>
          {sideMenu
            ? <div id="mysidebar"><Sidebar/></div>
            : <div id="mysidebar_close"><Sidebar/></div>
          }
          
          <Component {...pageProps} id="main" />
        </MainSection>
      {/* </AppContainer> */}
    </Provider>
    {/* </AppContext.Provider> */}
    </>
  )
};

const AppContainer = styled.div`
  /* border: 1px solid red; */
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex:1;
  height: calc(100vh);
  width: 100%; */
`;
const NavbarContainer = styled.div`
  /* border: 1px solid red; */
  overflow: hidden;
`;
const MainSection = styled.div`
  border: 1px solid red;
  border: 0;
  display: flex;
  background-color: whitesmoke;
  height: calc(100vh - 70px);
  div#mysidebar {
    /* border:1px solid red; */
    display: flex;
    width: 250px;
    height: calc(100vh - 70px);
    margin: 0px;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
  }
  div#mysidebar_close {
    /* border:1px solid red; */
    display: flex;
    width: 125px;
    height: calc(100vh - 70px);
    margin-left: -125px;
    -webkit-transition: all .3s ease-out;
    -moz-transition: all .3s ease-out;
    -o-transition: all .3s ease-out;
    transition: all .3s ease-out;
  }
`;

const Loader = styled(Loading)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;