import Head from 'next/head'
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';

export default function Dashboard() {
  return (
    <Home_Container>
        <Head><title>TEN | Home</title></Head>
        
        <Main_Container>
            {/* <Sidebar/> */}
            <TempDiv className="fade-in">
                <DashboardOutlinedIcon fontSize="large"/>
                <p>Dashboard</p>
            </TempDiv>
        </Main_Container>
    </Home_Container>
  )
};

const Home_Container = styled.div`
    /* border: 1px solid red; */
    display:flex;
    flex:1;
    height: 100vh;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const Main_Container = styled.div`
    /* border: 1px solid red; */
    display:flex;
    flex:1;
    min-height: calc(100vh - 70px);
    width: 100%;
    /* padding: 2rem; */
    padding-left: 0;
    `;

const TempDiv = styled.div`
    /* border: 1px solid red; */
display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;

    color: #bbb;
    font-size: 20px;
    p {
        padding: 0;
        margin: .5rem 0;
    }
`;