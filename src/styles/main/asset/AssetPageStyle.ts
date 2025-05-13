import styled from "styled-components";

export const Container = styled.div`
    padding: 24px;
`;

export const CurrentAmount = styled.div`
    font-size: 18px;
    margin-bottom: 20px;

    strong {
        font-size: 22px;
        color: #000;
    }
`;

export const GoalCard = styled.div`
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const GoalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

export const GoalTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
`;

export const SettingButton = styled.button`
    font-size: 13px;
    color: #5f7df8;
    background: none;
    border: none;
    cursor: pointer;
`;

export const GaugeWrapper = styled.div`
    text-align: center;
    margin: 20px 0;
`;

export const Gauge = styled.div`
    width: 80px;
    height: 80px;
    background-color: #eaeaea;
    border-radius: 50%;
    line-height: 80px;
    font-weight: bold;
    font-size: 18px;
    color: #5f7df8;
    margin: 0 auto;
`;

export const GoalDetail = styled.div`
    font-size: 14px;
    color: #333;

    div {
        margin-top: 4px;

        strong {
            font-weight: bold;
            color: #000;
        }
    }
`;

export const HoldingCard = styled.div`
    background-color: white;
    border-radius: 16px;
    padding: 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const HoldingLabel = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
`;

export const HoldingValue = styled.div`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;

    strong {
        color: #5bbfff;
    }
`;

export const DepositButton = styled.button`
    background-color: #5f7df8;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
    width: 100%;
`;
