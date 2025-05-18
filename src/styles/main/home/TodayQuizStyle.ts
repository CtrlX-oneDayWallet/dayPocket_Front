import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 1.4rem;
    padding: 3vw 5vw;
    background-color: ${({theme}) => theme.primary.pu1};
`;

export const Text = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: white;
    font-family: 'Inter';
`;

export const ActionButton = styled.a`
    width: 48px;
    height: 48px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
