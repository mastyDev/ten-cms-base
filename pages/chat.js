import Head from 'next/head'
import styled from "styled-components";
import SidebarChat from "../components/SidebarChat";

import ChannelWindow from "../components/ChannelWindow";
import TagIcon from '@mui/icons-material/Tag';

import { useSelector } from 'react-redux';
import { selectRoomId } from '../store/chatStore';

export default function chat() {
    const roomId = useSelector(selectRoomId)
    
    return (
    <Home_Container>
        <Head><title>TEN | Chat</title></Head>
        <Main_Container>
            <Chat_Container className="fade-in">
                <SidebarChat/>
                {roomId 
                ? (<ChannelWindow />)
                : (<ChannelContainer><EmptyInfo><TagIcon/>Select a channel</EmptyInfo></ChannelContainer>)
                }
            </Chat_Container>
        </Main_Container>
    </Home_Container>
  )
};

const Home_Container = styled.div`
    /* border: 1px solid red; */
    display:flex;
    flex:1;
    height: calc(100vh - 70px);
    flex-direction:column;
    justify-content: center;
    /* align-items: flex-end; */
`;

const Main_Container = styled.div`
    /* border: 1px solid red; */
    display:flex;
    flex:1;
    min-height: calc(100vh - 70px);
    width: 100%;
    padding-left: 0;
`;

const Chat_Container = styled.div`
    /* border: 1px solid red; */    
    display: flex;
    flex: 1;
    width: 100%;
    align-items: flex-start;
    color: #bbb;
    font-size: 20px;
    p {
        padding: 0;
        margin: .5rem;
    }
`;
// channel.js
const ChannelContainer = styled.div`
    /* border:1px solid red; */
    background-color: white;
    display: flex;
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
    justify-content: center;
`;
const EmptyInfo = styled.p`
    /* border:1px solid red; */
    display: flex;
    flex: 1;
    /* flex-direction: column; */
    margin: 0;
    padding: 0;
    justify-content:center;
    align-items: center;
    .MuiSvgIcon-root {
        /* border:1px solid red; */
        margin-right: 5px;
        height: 32px;
        width: 32px;
    }
`;