import Link from 'next/link'
import styled from "styled-components"
import { Button } from "@material-ui/core";

export default function SideOption({ url, Icon, title}) {
    return (
    <Option_Container>
        <Link href={url} ><MenuButton>
            {Icon && <Icon fontSize="medium" />}
            {title && <Title>{title}</Title>}
        </MenuButton></Link>
    </Option_Container>
  )
};

const Option_Container = styled.div`
    /* border:1px solid red; */
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 .5rem;
    div {
        /* border:1px solid red; */
        display: flex;
        flex:1;
        align-items: center;
    }
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 500;
    
    `;

const MenuButton = styled(Button)`
    width: 100%;
    &&& {
        /* border: 1px solid red; //debug */
        padding: 1rem 1.5rem;
        color: var(--darkest-blue);
        text-transform: none;
        justify-content: flex-start;
        &:hover {
            background-color: whitesmoke
        }
        .MuiSvgIcon-root {
            margin-right: 15px;
        }
    }
`;