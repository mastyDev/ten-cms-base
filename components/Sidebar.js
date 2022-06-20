import styled from 'styled-components';
import { Button } from "@material-ui/core";
import Link from 'next/link'
import SideOption from "../contexts/SideOption";
//icons import
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MapIcon from '@mui/icons-material/Map';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PasswordIcon from '@mui/icons-material/Password';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function Sidebar() {
    return (
    <Sidebar_Container>
        <Menu_Container>
            <span id='spacer'/>
            <SideOption url='/home' Icon={DashboardOutlinedIcon} title="Dashboard"/>
            <SideOption url='/calendar' Icon={CalendarMonthOutlinedIcon} title="Calendar"/>
            <SideOption url='/map' Icon={MapIcon} title="Map"/>
            <span id='spacer'/>
            <SideOption url='/accounts' Icon={AssignmentIndIcon} title="Accounts"/>
            <SideOption url='/transactions' Icon={CurrencyExchangeIcon} title="Transactions"/>
            <SideOption url='/support' Icon={SupportAgentIcon} title="Support"/>
            <span id='spacer'/>
            <SideOption url='/chat' Icon={ForumOutlinedIcon} title="Chat"/>
            <SideOption url='/documents' Icon={FileCopyIcon} title="Documentation"/>
            <SideOption url='/register' Icon={PasswordIcon} title="Users Data"/>
            <SideOption url='/admin' Icon={AdminPanelSettingsIcon} title="Admin Panel"/>
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
    width: 250px;
    height: calc(100vh - 70px);
    top: 0px;
    left: 0px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, 
                rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;

const Menu_Container = styled.div`
    height: calc(100vh - 70px) !important;
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
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 2rem;
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

        &:hover {
            background-color: whitesmoke
        }
        >.MuiSvgIcon-root {
            margin-right: 1px !important;
            font-size: 52px;
            color: yellowgreen;
        }    
    }
`;