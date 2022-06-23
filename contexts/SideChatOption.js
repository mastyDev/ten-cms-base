import styled from "styled-components"
// Redux
import { useDispatch } from 'react-redux';
import { enterRoom } from "../store/tenStore";
// UI
import { Button } from "@material-ui/core"
import {HiOutlineHashtag} from "react-icons/hi"

export default function SideChatOption({ url, Icon, title, id}) {
   
    const dispatch = useDispatch();
    const selectChannel = () => {
            if (id) {
                dispatch(enterRoom({
                    roomId: id
                }))
            }
    }

    return (
    <Option_Container>
            <MenuButton onClick={selectChannel}>
            {Icon && <Icon fontSize="" style={{ color:'var(--chat-menu)'}} />}
            {Icon ? (
                <Title>{title}</Title>
            ) : (
                <Option_Channel className='fade-in'>
                    <Hashtag/>{title}
                </Option_Channel>
            )}
            </MenuButton>
    </Option_Container>
  )
};

const Option_Container = styled.div`
    /* border:1px solid red; */
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 .5rem;
    cursor: pointer;
    
`;


const MenuButton = styled(Button)`
    width: 100%;
    &&& {
        /* border: 1px solid red; //debug */
        /* display: flex; */
        text-transform: none;
        justify-content: flex-start;
        
        &:hover {
            /* background-color: white */
        }
        .MuiSvgIcon-root {
            /* padding: .5rem; */
            margin-right: .5rem;
        }
    }
`;

const Title = styled.div`
    font-size: 14px;
    color: var(--chat-menu);
`;

const Option_Channel = styled.div`
        /* border: 1px solid red; */
        color: var(--chat-menu);
        font-size: 16px;
        display: flex;
        flex: 1;   
        align-items: center;
        justify-content: flex-start;
`;

const Hashtag = styled(HiOutlineHashtag)`
        margin-right: .2rem;
        font-size: 19px;
`;