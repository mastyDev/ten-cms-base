
// import { useEffect } from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import ChatInput from '../components/ChatInput';
import Message from "./Message"

import { useSelector } from "react-redux";
import { selectRoomId } from "../store/chatStore";
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from "../firebase";

import StarIcon from '@mui/icons-material/Star';
// import StarOutlineSharpIcon from '@mui/icons-material/StarOutlineSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { FaHashtag } from 'react-icons/fa';
import { borderColor } from "@mui/system";


export default function ChannelWindow() {
  const roomId = useSelector(selectRoomId);
  const chatRef = useRef(null);

  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  );
  
  const [roomMessages, loading] = useCollection(
    roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc')
  );

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [roomId, loading])

  return (
    <Channel_Container className="fade-in">

      <ChannelHeader>
        <HeaderLeft>
          <div>
          <Hashtag/><h3>{roomDetails?.data().name}</h3>
          <StarIcon style={{color:'orange',opacity:'1'}}/>
          </div>
          <div id="roomId">
          Key: {roomId}
          </div>

        </HeaderLeft>
        <HeaderRight>
          <InfoOutlinedIcon/>
          <h4>
          Details
          </h4>
        </HeaderRight>
      </ChannelHeader>

            <ChatMessages_Container>
              {roomMessages?.docs.map(doc => {
                  const { messages, timestamp, user, photo} = doc.data();
                  return (
                    <Message
                        key={doc.id}
                        message={messages}
                        timestamp={timestamp}
                        author={user}
                        userImage={photo}
                    />
                    );
              })}
              <ChatBottom ref={chatRef}/>
            </ChatMessages_Container>

        <ChatInput channelName={roomDetails?.data().name} channelId={roomId}/>
    </Channel_Container>
  )
};

const Channel_Container = styled.div`
    /* border:1px solid red; */
    background-color: white;
    display: flex;
    flex: .9;
    flex-direction: column;
    height: calc(100vh - 70px);
    border-left: 1px solid #ddd;
    /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, 
                rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
`;
const ChannelHeader = styled.div`
    /* border: 1px solid red; */
    display: flex;
    height: 100px;
    width: 100%;
    background-color: whitesmoke;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 1rem;
    border-bottom: 1px solid #bbb;

`;
const HeaderLeft = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: .5;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: .5rem;
    
    color: var(--darkest-blue);
    div#roomId {
      font-size: 12px;
    }
    div{
      /* border: 1px solid red; */
      display: flex;
      align-items: center;
      padding: 0;
    }
    h3{
      padding: 0 .5rem;
      font-size: 26px;
      line-height: 0px;
    }
    .MuiSvgIcon-root {
      /* margin-left: .5rem; */
      font-size: xx-large;
    }
`;
const Hashtag = styled(FaHashtag)`
  font-size: 32px;
`;

const HeaderRight = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: .5;
    height: 100%;
    align-items: center;
    justify-content: flex-end;
    padding-right: 1rem;
    color: var(--dark-blue);
    h4{
      margin: 2rem 0;
      font-size: 18px;
    }
    .MuiSvgIcon-root {
      /* border: 1px solid red; */
      margin-right: .5rem;
      font-size: x-large;
    }
`;
const ChatMessages_Container = styled.div`
    /* border:1px solid yellowgreen; */
    background-color: white;
    display: flex;
    height: calc(100vh - 270px);
    padding: 1rem;
    padding-bottom: 1rem;
    flex-direction: column;
    overflow-y: scroll;
`;

const ChatBottom = styled.div`
    /* display: flex; */
    border: 1px solid #eee;
    margin-top: 1rem;
    height: 1px;
 /* padding-top: 3rem; */
`;