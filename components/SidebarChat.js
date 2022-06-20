import styled from "styled-components"
import SideChatOption from "../contexts/SideChatOption";
import { Button } from "@material-ui/core";

import TagIcon from '@mui/icons-material/Tag';
import InsertCommentIcon from "@mui/icons-material/InsertComment"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"
import PeopleAltIcon from "@mui/icons-material/PeopleAlt"
import FileCopyIcon from "@mui/icons-material/FileCopy"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { auth, db } from "../firebase";

import { useCollection } from "react-firebase-hooks/firestore"
// import {useAuthState} from "react-firebase-hooks/auth";
// import { auth } from "../firebase";

export default function SidebarChat() {
    // const [user] = useAuthState(auth);
    
    const [Channels, loading, error] = useCollection(db.collection('rooms'));

    const addChannel = () => {
        const channelName = prompt('Add new channel')
        if(channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }
    

    return (
    <SidebarChat_Container className="fade-in">
        <span id="spacer"/>
        <Header>
            <CreateButton startIcon={<TagIcon />} onClick={addChannel} >New Channel</CreateButton>
        </Header>
        {/* <span id="line"/> */}
        <SideChatOption url={'/chat'} Icon={InsertCommentIcon} title="Threads"/>
        <SideChatOption url={'/chat'} Icon={InboxIcon} title="Mentions"/>
        <SideChatOption url={'/chat'} Icon={DraftsIcon} title="Saved items"/>
        <SideChatOption url={'/chat'} Icon={PeopleAltIcon} title="User groups"/>
        <SideChatOption url={'/chat'} Icon={FileCopyIcon} title="File browser"/>
        <SideChatOption url={'/chat'} Icon={ExpandLessIcon} title="Show less"/>
        <span id="line"/>

        <SideChatOption url={'/chat'} Icon={ExpandMoreIcon} title="Channels"/>

        {Channels?.docs.map(doc => (
            <SideChatOption 
                selectChannel
                // Surl={'/chat/'+doc.data().name}
                id={doc.id}
                key={doc.id} 
                title={doc.data().name}/>
        ))}
    </SidebarChat_Container>
  )
};

const SidebarChat_Container = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: .1;
    justify-content: flex-start;
    /* flex: .2; */
    /* height: calc(100vh - 70px); */
    min-width: 250px;
    flex-direction: column;
    /* height: 100%; */
    padding: 0 1rem;
    /* margin-top: 140px; */
    /* background-color: #e9e9e9; */
    span#spacer {
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 1rem;
    }
    span#line {
        display: flex;
        width: 100%;
        padding-bottom: 1rem;
        border-bottom: 1px solid #999;
        margin-bottom: 1rem;
    }
`;

const Header = styled.div`
    display: flex;
    border-bottom: 1px solid #999;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    > .MuiSvgIcon-root {
        padding: 0.5rem;
        color: white;
        font-size: 40px;
        background-color: #999;
        border-radius: 50%;
    }
`;

const CreateButton = styled(Button)`
    &&& {
        display: flex;
        flex: 1;
        border-radius: 4px;
        padding: .3rem .1rem;
        background-color: #eee;
        color: var(--darkest-blue);
        /* border: 1px solid var(--chat-icon); */
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        &:hover {
            background-color: var(--light-blue);
            color: white;
            opacity: .85;
        }
    }
`;

// const Header_Info = styled.div`
//     /* border: 1px solid gold; */
//     flex: 1;
//     flex-direction: column;
//     justify-content: center;
//     /* align-items: center; */
//     >h2 {
//         /* border: 1px solid red; */
//         margin: 0;
//         font-size: 22px;
//         color: #555;
//     }
//     >h3 {
//         /* border: 1px solid red; */
//         margin: 0;
//         font-size: 16px;
//         font-weight: 500;
//         color: #777;
//         align-items: center;
        
//     >.MuiSvgIcon-root {
//             /* border: 1px solid red; */
//             margin: 0px 4px -2px 2px;
//             color: limegreen;
//         }
//     }
// `;