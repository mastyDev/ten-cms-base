import Head from 'next/head'
import styled from "styled-components";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function register() {
  return (
    <Home_Container>
        <Head><title>TEN | Registration</title></Head>
        <Main_Container>
            <TempDiv className="fade-in">
                <LockOutlinedIcon fontSize="large"/>
                <p>Login & Registration</p>
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
    padding-left: 0;
    `;

const TempDiv = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: 1;
    flex-direction: column;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: #bbb;
    font-size: 20px;
    p {
        padding: 0;
        margin: .5rem;
    }
`;