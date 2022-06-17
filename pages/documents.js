import Head from 'next/head'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

export default function documents() {
  return (
    <Home_Container>
        <Head><title>TEN | Documents</title></Head>
        <Navbar/>
        <Main_Container>
            <Sidebar/>
            <TempDiv className="fade-in">
                <InsertDriveFileOutlinedIcon fontSize="large"/>
                <p>Documents</p>
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