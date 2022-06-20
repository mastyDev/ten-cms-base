import { Button } from "@material-ui/core";
import styled from "styled-components"
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { useState } from "react";

import firebase from 'firebase/compat/app';
import { auth, db } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'

export default function ChatInput({channelName, channelId}) {
    const [user] = useAuthState(auth);
    const [input, setInput] = useState('');
    
    const sendMessage = (e) => {
        e.preventDefault(); // prevents refresh

        if (!channelId) {
            console.log(channelId);
            return false;
        } 
            db.collection('rooms').doc(channelId).collection('messages').add({
            messages: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            photo: user.photoURL,
        });
        setInput('');
    };

    return (
    <ChatInput_Container>
      <form>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
        <Button type="submit" onClick={sendMessage}><FingerprintIcon/></Button>
      </form>
    </ChatInput_Container>
  )
  };

const ChatInput_Container = styled.div`
    /* border:1px solid red; */
    background-color: whitesmoke;
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    bottom: 0;
    border-top: 1px solid #bbb;
    padding: 0 2rem;

    form {
        display: flex;
        flex: 1;
    }
    input {
        /* border: 1px solid red; */
        border-radius: 5px;
        border: 0;
        outline: none;
        width: 100%;
        font-size: 17px;
        padding: 1.2rem 1rem;
        width: calc(100% - 60px - 1rem);
    }
    Button {
        /* border: 1px solid red; */
        height: 60px;
        width: 60px;
        border-radius: 50%;
        margin: 0;
        margin-left: 1rem;
        background-color: var(--light-blue);
        :hover {
            background-color: var(--light-blue);
            opacity: .85;
            color: white;
            transition: all .2s ease-out;
        }

        .MuiSvgIcon-root {
            padding: 0;
            margin: 0;
            font-size: xx-large;
        }
    }
`;