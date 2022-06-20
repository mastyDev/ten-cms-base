import { auth } from "../firebase";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import {TbLogout, TbSettings, TbUser} from "react-icons/tb";

export default function ProfileMenuPopup() {
  return (
    <Main_Container>
        <Constainer className="scale-in-ver-top">
            <MenuButton>Profile<TbUser style={{marginLeft: 10}}/></MenuButton>
            <MenuButton>Settings<TbSettings style={{marginLeft: 10}}/></MenuButton>
            <MenuButton id="logout" onClick={() => {auth.signOut()}}>Logout<TbLogout style={{marginLeft: 10, color: '#F34141'}}/></MenuButton>
        </Constainer>
    </Main_Container>
  )
};

const Main_Container = styled.div`
    /* border: 1px solid red; */
    position: absolute;
    display: flex;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: rgba(127, 137, 147, .2);
    height: calc(100vh - 70px);
`;

const Constainer = styled.div`
    position: absolute;
    display: flex;
    flex: 1;
    flex-direction: column;
    top: 0px;
    right: 5rem;
    margin-bottom: -1.5rem;
    width: 150px;
    min-height: 100px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0px 0px 10px 10px;
    justify-content: flex-end;
    align-items: flex-end;

    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
`;

const MenuButton = styled(Button)`
    &&& {
    justify-content: flex-end;
    width: calc(150px - 2rem);
    margin: .2rem 0;
    text-transform: none;
    /* color: #eee; */
    }
    &#logout {
        &&& {
            color: #F34141;
            font-weight: bold;
        }
    }
`;