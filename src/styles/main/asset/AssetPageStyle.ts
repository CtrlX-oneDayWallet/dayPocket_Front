import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    min-height: 100vh;

    @media screen and (max-width: 370px) {
        padding: 16px;
        gap: 20px;
    }
`;

export const CurrentAmount = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #000000;
    margin-bottom: 20px;

    strong {
        display: block;
        font-size: 28px;
        margin-top: 4px;
    }
    
    @media screen and (max-width: 370px) {
        font-size: 14px;
        
        strong {
            font-size: 24px;
        }
    }
`;

export const Card = styled.div`
    background-color: white;
    border-radius: 22px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: visible;
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
    background-color: #E7E9FD;
    color: #7079F6;
    border-radius: 12px;
    padding: 6px 10px;
    border: none;
    font-weight: 600;
`;

export const GaugeWrapper = styled.div`
    position: relative;
    height: 100px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
`;

export const GoalDetail = styled.div`
    font-size: 14px;
    color: #333;

    div {
        margin-top: 30px;

        strong {
            font-weight: bold;
            color: #000;
        }
    }
`;

export const HoldingValue = styled.div`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 16px;

    strong {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const DepositButton = styled.button`
    background-color: #E7E9FD;
    color: #7079F6;
    padding: 12px 0px;
    border: none;
    border-radius: 12px;
    font-size: 14px;
    font-weight: bold;
    width: 100%;
`;
