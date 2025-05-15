import styled from "styled-components";

export const Card = styled.div`
    width: 326px;
    height: 66px;
    background-color: #F1F1F1;
    border-radius: 22px;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 66px;
    transition: background-color 0.3s;

    @media screen and (max-width: 390px) {
        padding: 14px 16px;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end
`;

export const IconWrapper = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const Label = styled.div`
    font-size: 13px;
    font-family: 'Inter';
    font-weight: 600;
    color: #2B2B2B;

    @media screen and (max-width: 390px) {
        font-size: 13px;
    }
`;

export const Reward = styled.div`
    background-color: #CDCFF6;
    width: 42px;
    height: 18px;
    color: #7079F6;
    font-family: 'Inter';
    text-align: center;
    white-space: nowrap;
    line-height: 1;
    justify-content: center;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 4px;
    border-radius: 4px;

    & > strong {
        margin-left: 1px;
    }
    & > span {
        font-weight: 600;
    }
    
    @media screen and (max-width: 390px) {
        font-size: 13px;
    }
`;
