import Head from 'next/head'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

export default function accounts() {
  return (
    <Home_Container>
        <Head><title>TEN | Accounts</title></Head>
        <Navbar/>
        <Main_Container>
            <Sidebar/>
            <TempDiv className="fade-in">
                <SwitchAccountIcon fontSize="large"/>
                <p>Accounts</p>
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
    padding: 2rem;
    padding-left: 0;
    `;

const TempDiv = styled.div`

    background-color: white;
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    /* padding: 2rem; */
    color: #bbb;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    p {
        padding: 0;
        margin: .5rem;
    }
`;