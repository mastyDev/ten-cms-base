import styled from "styled-components"
import { auth } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth'
import { Avatar } from "@material-ui/core";

export default function Message({ message, timestamp, author, userImage}) {
  const [user] = useAuthState(auth);
  if(author !== user.displayName) {
    return (
    <Message_Container_left>
        <div id="avatar"><UserAvatar src={userImage}/></div>
        <div id="meta">
        <InfoLeft_up>
            <h4>{author}</h4>
            <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </InfoLeft_up>
        <Message_Left><span>{message}</span></Message_Left>
        </div>
    </Message_Container_left>
  )} else {
      return (
    <Message_Container_Right>
        <div id="meta">
        <InfoRight_up><h4>{author}</h4><span>{new Date(timestamp?.toDate()).toUTCString()}</span></InfoRight_up>
        <Message_Own><span>{message}</span></Message_Own>
        </div>
        <div id="avatar"><UserAvatar src={userImage}/></div>
    </Message_Container_Right>
  )}

};
// skazzo@a0.3.0.4 solved
 
const UserAvatar = styled(Avatar)`
    margin: 0;
    &&& {
        margin: .5rem;
        margin-top: 0;
        width: 45px;
        height: 45px;
        box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, 
                    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    }
`;

const Message_Container_left = styled.div`

    margin-top: .5rem;
    display:flex;
    min-height: 100px;
    div#avatar{
        display: flex;
    }
    div#meta {
        display: flex;
        flex-direction: column;
    }
`;
const InfoLeft_up = styled.div`

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-left: .5rem;
    h4 {
        margin:0;
        font-size: 18px;
        color: var(--darkest-blue);
    }
    span {
        margin-left: 0px;
        font-size: 14px;
    }
`;
const Message_Left = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-start;
    font-size: 18px;
    color: white;
    span {
        background-color: var(--light-blue);
        padding: .5rem 1rem;
        border-radius: 0px 10px 10px 10px;
        box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 5px -1px, 
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
`;


const Message_Container_Right = styled.div`

margin-top: 1rem;
    display:flex;
    justify-content: flex-end;
    /* flex:1; */
    div#avatar{

        display: flex;
    }
`;
const InfoRight_up = styled.div`
    
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    margin-right: .5rem;
    h4 {
        margin:0;
        font-size: 18px;
        color: var(--darkest-blue);
    }
    span {
        margin-right: 0px;
        font-size: 14px;
    }
`;
const Message_Own = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: flex-end;
    font-size: 18px;
    color: whitesmoke;
    span {
        background-color: var(--dark-blue);
        padding: .5rem 1rem;
        border-radius: 10px 0px 10px 10px;
        box-shadow: rgba(50, 50, 93, 0.4) 0px 2px 5px -1px, 
        rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
`;