import styled from "styled-components"
import Head from "next/head"
import Image from "next/image"
import { auth, provider } from "../firebase"

import imgLogin from "../public/logo.svg"

export default function Login() {
    const SignIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

  return (
    <Container className="fade-in">
        <Head><title>mastyDev/Login</title></Head>

        <LoginContainer className="login_Container">
            <ImageContainer>
                <Image className="login_Img" width="160" height="160" await src={imgLogin} alt="loading" />
            </ImageContainer>
            {/* <LoginInput placeholder="user/email"/>
            <LoginInput type="password" placeholder="password"/>
            <LoginButton variant="outlined">Sign in</LoginButton>
            <Page>- or -</Page> */}
            <GoogleButton onClick={SignIn} className="login-with-google-btn">Sign in with Google</GoogleButton>
            <Page>Ver alpha 0.18</Page>
            {/* <Page>You don't have an account? <a href="#">Register here</a></Page> */}
            <Page id='copyright'><a>&copy;2022 @MastyDev</a></Page>
        </LoginContainer>
    </Container>
  )
}


const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;
const LoginInput = styled.input`
    margin: .5rem 0;
    padding: .5rem;
    width: 100%;
    font-size: 17px;
    border: .5px solid #bfbfbf;
    border-radius: 5px;
    outline: none;
`;

const Page = styled.p`
    margin:.2rem,0;
    padding: 0;
    max-width: 200px;
    font-size: 14px;
    text-align: center;
    color: grey;
    a {
        color: #2699fb;
    }
    a:hover {
        text-decoration: underline;
    }
    &#copyright {
      cursor: pointer;
      padding-top: 1rem;
      a {
        color: #bbb;
      }
      a:hover {
        text-decoration: none;
        color: #2699fb;
      }
    }
`; 

const ImageContainer = styled.div`
    padding: 1rem 0;
`;

const LoginContainer = styled.div`
    padding: 5rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius:30px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

const LoginButton = styled.button`
    padding: 12px 16px 12px 16px;
    width: 100%;
    border: none;
    outline: none;
    color: #f5f5f5;
    font-size: 14px;
    font-weight: 500;
    background-color: #2699fb;
    border-radius: 3px;
    -webkit-box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    -webkit-transition: background-color .3s, -webkit-box-shadow .3s;
    transition: background-color .3s, -webkit-box-shadow .3s;
    transition: background-color .3s, box-shadow .3s;
    transition: background-color .3s, box-shadow .3s, -webkit-box-shadow .3s;
    :hover {
        opacity: 0.95;
    }
`;

const GoogleButton = styled.button``;