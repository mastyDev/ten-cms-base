import styled from "styled-components"

export default function page404() {
  return (
    <Page404>
        <h1>404</h1>
        <h2>This page do not exist</h2>
    </Page404>
  )
}

const Page404 = styled.div`
    /* border: 1px solid red; */
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 64px;
        font-weight: 600;
        color: var(--darkest-blue);
        border-bottom: 3px solid var(--light-blue);
        margin: 0;
    }

    h2 {
        color: var(--darkest-blue);
        font-size: 22px;
        font-weight: 500;
        margin-top: .5rem;
    }

`;
