import Head from 'next/head'
import styled from 'styled-components';
import Loading from '../contexts/Loading';
import { useEffect } from 'react';
import Router from "next/router";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/home');
    }, 1500)
  }, [])

  return (
    <Container>
      <Head>
        <title>MDEV-CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Loading />
    </Container>
  )
};

const Container = styled.div`
  /* border: 5px dashed red; */
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: left;
  padding: 0 !important;
`;
