import styled from "styled-components"
import Head from "next/head"
import { ThreeBounce } from "better-react-spinkit";
export default function Loading() {
  return (
    <Container>
        <Head><title>Loading...</title></Head>
        <ThreeBounce color="#121B26" radius={1000}/>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    height: 100vh;
    padding: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;