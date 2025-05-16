import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: ${({ theme }) => theme.primary.pu1};
    border-radius: 22px;
    margin-bottom: 24px;
`;

export const Text = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.gray.white};
    font-family: 'Inter';
`;

export const ActionButton = styled.div`
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.gray.white};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
