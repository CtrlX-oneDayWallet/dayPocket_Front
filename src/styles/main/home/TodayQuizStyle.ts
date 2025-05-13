import styled from "styled-components";

export const Card = styled.div`
    margin-top: 24px;
    padding: 16px 20px;
    background: #7079F6;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Text = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: white;
`;

export const ActionButton = styled.button`
    background-color: #FFFFFF;
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 20px;
    width: 40px;
    height: 40px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Arrow = styled.span`
    font-size: 20px;
    color: #7079F6;
`;
