import styled from 'styled-components';
import { Button } from "@material-ui/core";
import Link from 'next/link'
//icons import
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PinDropIcon from '@mui/icons-material/PinDrop';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function Sidebar() {

    return (
    <Sidebar_Container>
        <Menu_Container>
                <span id='spacer'/>
            <Link href='/home'><MenuButton>
                <DashboardIcon className='mg-r-10'/>Dashboard</MenuButton></Link>
            <Link href='/calendar'><MenuButton>
                <CalendarMonthIcon className='mg-r-10'/>Calendar</MenuButton></Link>
            <Link href='/map'><MenuButton>
                <PinDropIcon className='mg-r-10'/>Map</MenuButton></Link>
                <span id='spacer'/>
            <Link href='/accounts'><MenuButton>
                <AccountCircleIcon className='mg-r-10'/>Accounts</MenuButton></Link>
            <Link href='/transactions'><MenuButton>
                <CurrencyExchangeOutlinedIcon className='mg-r-10'/>Transactions</MenuButton></Link>
            <Link href='/support'><MenuButton>
                <LiveHelpIcon className='mg-r-10'/>Tickets & Support</MenuButton></Link>
                <span id='spacer'/>
            <Link href='/documents'><MenuButton>
                <InsertDriveFileOutlinedIcon className='mg-r-10'/>Documentation</MenuButton></Link>
            <Link href='/register'><MenuButton>
                <LockIcon className='mg-r-10'/>Login & Registration</MenuButton></Link>
            <Link href='/chat'><MenuButton>
                <ChatOutlinedIcon className='mg-r-10'/>Chat</MenuButton></Link>
            <Link href='/admin'><MenuButton>
                <AdminPanelSettingsIcon className='mg-r-10'/>Admin Panel</MenuButton></Link>
        </Menu_Container>
    </Sidebar_Container>
  )
};

const Sidebar_Container = styled.div`
    /* border: 1px solid red; */
    background-color: whitesmoke;
    display: flex !important;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 250px;
    top: 0px;
    left: 0px;
`;

const Menu_Container = styled.div`
    height: calc(100vh - 160px) !important;
    display:flex;
    justify-content:flex-start;
    align-items: flex-start;
    flex-direction: column;
    color: #1f2630;

    padding-top: 0rem !important;
    padding-bottom: 4rem;
    span#spacer {
        /* border: 1px solid red; */
        display: flex;
        color: #bbb;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2rem;
        margin:0 1rem;
    }
`;

const MenuButton = styled(Button)`
    width: 100%;
    &&& {
        display: flex;
        /* border: 1px solid red; //debug */
        color: #1f2630;
        padding: .5rem 0;
        text-transform: none;
        justify-content: flex-start;
        
        margin: .3rem 0;
        padding-left: 2rem;
    }    
`;