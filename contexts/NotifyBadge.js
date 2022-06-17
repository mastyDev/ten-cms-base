import styled from "styled-components"

export default function NotifyBadge(props) {
    if (props.value > 0) {
        return (
            <Notify_Container style={{ backgroundColor: (props.bg) }}>
              <p>{props.value}</p>
            </Notify_Container>
        )
    }
};

const Notify_Container = styled.div`
    /* border: 1px solid rgba(255,255,255,0.5); */
    border-radius: 0px 0px 11px 11px;

    position: absolute;
    top: -6px;
    right: 10;
    display: flex;
    color: #FFF;
    height: 22px;
    padding:0 .8rem;
    z-index: 15;

    font-size: 12px;
    font-weight: bolder;
    justify-content: center;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, 
                rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;
