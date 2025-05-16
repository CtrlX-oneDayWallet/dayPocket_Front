import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    min-height: 100vh;

    @media screen and (max-width: 370px) {
        padding: 18px;
        gap: 22px;
    }
`;

export const CurrentAmount = styled.div`
    font-family: "Inter";
    font-weight: 700;
    color: ${({ theme }) => theme.gray.black};
    line-height: 1.4;
    font-size: 18px;
    margin-top: 20px;
    
    @media screen and (max-width: 370px) {        
        strong {
            display: block;
            font-size: 28px;
            margin-top: 4px;
            margin-bottom: 4px;
        }
        
        span {
            display: block;
            font-size: 16px;
            margin-top: 2px;
            margin-bottom: 1px;
        }
    }
`;

export const Card = styled.div`
    background-color: ${({ theme }) => theme.gray.white};
    border-radius: 22px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    
    @media screen and (max-width: 370px) {
        padding: 16px;
    }
`;

export const CardTitle = styled.div`
    font-size: 13px;
    font-weight: 600;
`;

export const GoalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SettingButton = styled.button`
    font-size: 13px;
    background-color: ${({ theme }) => theme.primary.pu2};
    color: ${({ theme }) => theme.primary.pu1};
    border-radius: 12px;
    padding: 6px 10px;
    border: none;
    font-weight: 600;
`;

export const GaugeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    overflow: visible;
`;

export const GoalDetail = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.gray.black};

    div {
        display: flex;
        margin-top: 14px;
        justify-content: space-between;

        strong {
            font-size: 14px;
            font-weight: 700;
        }
    }
`;

export const HoldingValue = styled.div`
    font-size: 13px;
    font-weight: bold;
    color: ${({ theme }) => theme.gray.black};

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 18px;
        margin-bottom: 60px;

        strong {
            font-size: 14px;
            font-weight: 700;
        }
    }
`;

export const DepositButton = styled.button`
    background-color: ${({ theme }) => theme.primary.pu2};
    color: ${({ theme }) => theme.primary.pu1};
    padding: 18px 0px;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
`;
