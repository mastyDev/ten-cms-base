import { useState } from 'react';
import { Avatar, IconButton, Button } from "@material-ui/core";
import styled from "styled-components";
import Image from 'next/image';
import Logo from '../public/logoDark.svg';
import NotifyBadge from '../contexts/NotifyBadge';
import ProfileMenuPopup from '../contexts/ProfileMenuPopup';

import {useAuthState} from "react-firebase-hooks/auth";
// import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DownloadIcon from '@mui/icons-material/Download';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



export default function Navbar() {
    const [profileMenu, setProfileMenu] = useState(false);
    const [user] = useAuthState(auth);
    const [search, setSearch] = useState('');

    return (
    <Nav_Container>

        <Header>
            <Logo_Container>
                <LogoImage src={Logo}/><span>ver a0.3.0.1</span>
            </Logo_Container>
            <IconButton><MenuOpenIcon style={{color: "rgba(255, 255, 255, 0.7)"}}/></IconButton>
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
                        {/* <NotifyBadge bg={'#F34141'} value={'1'}/> */}
                        <MailDot style={{color: "var(--google-red)"}}/>
                         <MailOutlineIcon style={{color: "whitesmoke", marginTop: '10px'}}/>
                    </IconButton>
                    
                    <IconButton>
                        {/* <NotifyBadge bg={'#2699FB'} value={'1'}/> */}
                        <BellDot style={{color: "orange"}}/>
                        <NotificationsNoneIcon style={{color: "whitesmoke", marginTop: '10px'}}/>
                    </IconButton>
            </IconsContainer>
            <Profile_Menu>
            {profileMenu 
                ?<ProfileMenu onClick={() => setProfileMenu(false)}>{user.displayName}<KeyboardArrowUpIcon/></ProfileMenu>
                :<ProfileMenu onClick={() => setProfileMenu(true)}>{user.displayName}<KeyboardArrowDownIcon/></ProfileMenu>
            }
            {profileMenu && (<ProfileMenuPopup/>)}
            </Profile_Menu>
            <Avatar_Container>
                <FiberManualRecordIcon />
                <UserAvatar src={user.photoURL}></UserAvatar> 
            </Avatar_Container>    
        </Profile_Container>
    </Nav_Container>
  )
}

const Nav_Container = styled.div`
    /* border: 1px solid red; */
    background-color: var(--navbar-blue);
    display: flex !important;
    position: relative;
    /* top: 0; */
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    padding-left: 0;
    z-index: 11;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

    p#icon-label {
        margin-left: .5rem;
        font-size: 14px;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.5);
    }
`;

const Header = styled.div`
    /* border: 1px solid red; */
    background-color: var(--navbar-blue);
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
    color: rgba(255,255,255,0.3);
    align-items: flex-end; // version alignment
    span {
        margin-left: 10px;
    }
`;

const LogoImage = styled(Image)`
    border: 0;
`;

const SearchBox = styled.form`
    /* border: 1px solid red; */
    display: flex;
    height: 39px;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    background-color: var(--dark-blue);
    border-radius: 50px;
`;

const SearchInput = styled.input`
    background-color: var(--dark-blue);
    border: 0;
    outline: none;
    font-size: 16px;
    color: grey;
    padding: .5rem 10px;
    /* padding-left: 1rem; */
    /* margin-left: .5rem; */
    color: rgba(255, 255, 255, 0.9);
`;

const SearchButton = styled(IconButton)`
    &&& {
        color: white;
        /* background-color: #253140; */
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
`;

const ProfileMenu = styled(Button)`
&&& {
    display: flex;
    align-items: center;
    font-weight: 600;
    text-transform: none;
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

const Avatar_Container = styled.div`
    .MuiSvgIcon-root {
        position: absolute;
        z-index: 100;
        top: 10px;
        right: 40px;
        color: var(--light-green);
        padding: 2px;
    }
`;

const UserAvatar = styled(Avatar)`
    border: 1px solid rgba(255, 255, 255, 0.35);
    margin: 0 .5rem;
`;

const MailDot = styled(FiberManualRecordIcon)`
    position: absolute;
    z-index: 100;
    top: 15px;
    right: 0px;
    padding: 5px;
`;

const BellDot = styled(FiberManualRecordIcon)`
    position: absolute;
    z-index: 100;
    top: 15px;
    right: 5px;
    padding: 5px;
`;