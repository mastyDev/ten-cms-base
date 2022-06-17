import { useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";
import styled from "styled-components"
import Image from 'next/image'
import Logo from '../public/logoDark.svg';
import NotifyBadge from '../contexts/NotifyBadge';

import {useAuthState} from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";

import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Navbar() {
    const [user] = useAuthState(auth);
    const [search, setSearch] = useState('');

    return (
    <Nav_Container>

        <Header>
            <Logo_Container>
                <LogoImage src={Logo}/>
            </Logo_Container>
            <IconButton><MenuIcon style={{color: "rgba(255, 255, 255, 0.7)"}}/></IconButton>
        </Header>

        <Search_Container>
            <SearchBox>
                <SearchButton disabled><SearchIcon/></SearchButton>
                <SearchInput placeholder="Search" onChange={e => setSearch(e.target.value)}/>
                    {search.length > 0 ? (<IconButton type="reset" style={{color: "rgba(255, 255, 255, 0.5)"}} onReset={e => setSearch(null)}><CloseIcon/></IconButton>
                    ) : (<IconButton><CloseIcon /></IconButton>)}
            </SearchBox>
                <IconButton>
                    <AnalyticsIcon style={{color: "rgba(255, 255, 255, 0.5)"}}/><p id='icon-label'>Analytics</p>
                </IconButton>
                <IconButton>
                    <DownloadIcon style={{color: "rgba(255, 255, 255, 0.5)"}}/><p id='icon-label'>Report</p>
                </IconButton>
        </Search_Container>
        
        <Profile_Container>
            <IconsContainer>
                    <IconButton>
                        <NotifyBadge bg={'#F34141'} value={'3'}/>
                        <MailOutlineIcon style={{color: "whitesmoke", marginTop: '10px'}}/>
                    </IconButton>
                    
                    <IconButton>
                        <NotifyBadge bg={'#2699FB'} value={'9'}/>
                        <NotificationsNoneIcon style={{color: "whitesmoke", marginTop: '10px'}}/>
                    </IconButton>
            </IconsContainer>
            
            <Profile_Menu>
                <p id='profile'>{user.displayName}<KeyboardArrowDownIcon/></p>
            </Profile_Menu>
            <UserAvatar src={user.photoURL} onClick={() => {
                auth.signOut()
                console.log(user.displayName+' has been signed out')
            }}/> 
        </Profile_Container>
    </Nav_Container>
  )
}

const Nav_Container = styled.div`
    /* border: 1px solid red; */
    /* border-bottom: 1px solid #ddd; */
    background-color: #121B26;
    display: flex !important;
    position: sticky;
    top: 0;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-left: 0;
    z-index: 10;

    p#icon-label {
        margin-left: .5rem;
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.5);
    }
`;

const Header = styled.div`
    /* border: 1px solid red; */
    background-color: #121B26;
    display: flex;
    height: 70px;
    width: 250px;
    align-items: center;
`;
const Search_Container = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: .5;
    justify-content: flex-start;
    align-items: center;
`;

const Logo_Container = styled.div`
    /* border: 1px solid red; */
    display: flex;
    width: 100%;
    padding-left: 2rem;
    height: 40px;
`;

const LogoImage = styled(Image)`
    border: 0;
`;

const SearchBox = styled.form`
    /* border: 1px solid red; */
    display: flex;
    height: 49px;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    background-color: #29313c;
    border-radius: 50px;
`;

const SearchInput = styled.input`
    background-color:#253140;
    border: 0;
    outline: none;
    font-size: 16px;
    color: grey;
    padding: 0 10px;
    /* padding-left: 1rem; */
    /* margin-left: .5rem; */
    color: rgba(255, 255, 255, 0.7);
`;

const SearchButton = styled(IconButton)`
    &&& {
        color: white;
        background-color: #253140;
    }
`;

const Profile_Container = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: .5;
    justify-content: flex-end;
    align-items: center;
    font-size: 13px;
    padding-right: 1.5rem;
    color: grey;

    `;

const Profile_Menu = styled.div`
    /* border: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.9);

    p#profile {
        display: flex;
        align-items: center;
        font-weight: 600;
        color: rgba(255, 255, 255, .7);
        :hover {
            color: white;
        }
    }
`;

const IconsContainer = styled.div`
    /* border: 1px solid red; */
    display: flex;
    padding: 0 1rem;
`;
const UserAvatar = styled(Avatar)`
    border: 1px solid rgba(255, 255, 255, 0.35);
    margin: 0 .5rem;
    cursor: pointer;
`;