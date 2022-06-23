import { useRef, useState } from 'react'
import styled from 'styled-components';
import { Button } from "@material-ui/core";
import SideOption from "../contexts/SideOption";
//icons import
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MapIcon from '@mui/icons-material/Map';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import KeyIcon from '@mui/icons-material/Key';
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
            <SideOption url='/documents' Icon={FileCopyIcon} title="Docs"/>
            <SideOption url='/register' Icon={KeyIcon} title="Security"/>
            <SideOption url='/admin' Icon={AdminPanelSettingsIcon} title="Settings"/>
        </Menu_Container>
    </Sidebar_Container>
    )
};    

const Sidebar_Container = styled.div`
    /* border: 1px solid red; */
    background-color: white;
    border: 0;
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
    overflow-x: hidden; /* Disable horizontal scroll */
    display: flex !important;
    flex-direction: column;
    position: relative;
    height: calc(100vh - 70px);
    width: 100%;
    top: 0px;
    left: 0px;
    z-index: 20;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, 
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
`;

const Menu_Container = styled.div`
    height: calc(100vh - 70px) !important;
    border: 0;
    /* display:flex; */
    justify-content:flex-start;
    align-items: flex-start;
    flex-direction: column;
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