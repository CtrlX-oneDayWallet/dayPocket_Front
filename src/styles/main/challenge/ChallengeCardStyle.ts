import styled from "styled-components";

export const Card = styled.div`
    background-color: white;
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
`;

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 12px;
`;

export const Label = styled.div`
    font-size: 16px;
`;

export const Reward = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: #5f7df8;
`;

export const IconWrapper = styled.div`
    width: 32px;
    height: 32px;
    
    & > svg {
        width: 100%;
        height: 100%;
    }
`;