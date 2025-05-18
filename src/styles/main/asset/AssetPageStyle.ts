import styled from "styled-components";

export const Container = styled.div`
    padding: 6vh 5vw;
    display: flex;
    flex-direction: column;
    gap: 3vh;
`;

export const CurrentAmount = styled.div`
    font-family: "Inter";
    font-weight: 700;
    color: ${({ theme }) => theme.gray.black};
    font-size: clamp(1.1rem, 3vw, 2.5rem);
    line-height: 1.4;
    margin-top: 1vh;
    gap: 3vh;
    
    strong {
        display: block;
        font-size: clamp(1.8rem, 4vw, 3.5rem);
    }
    
    span {
        display: block;
        font-size: clamp(1.2rem, 4vw, 2.5rem);
    }

`;

export const Card = styled.div`
    background-color: ${({ theme }) => theme.gray.white};
    border-radius: 22px;
    padding: 4vw 5vw;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    overflow: visible;
`;

export const CardTitle = styled.div`
    font-size: clamp(0.8rem, 3.5vw, 1.2rem);
    font-weight: 600;
`;

export const GoalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SettingButton = styled.button`
    font-size: clamp(0.8rem, 3.0vw, 1.2rem);
    background-color: ${({ theme }) => theme.primary.pu2};
    color: ${({ theme }) => theme.primary.pu1};
    border-radius: 12px;
    padding: 1.5vw 2.5vw;
    border: none;
    font-weight: 600;
`;

export const GaugeWrapper = styled.div`
    width: 100%;
    padding: 2vw 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
`;

export const GoalDetail = styled.div`
    font-size: clamp(0.8rem, 3.0vw, 1.2rem);
    font-weight: bold;
    gap: vh;
    color: ${({ theme }) => theme.gray.black};

    div {
        display: flex;
        margin-top: 1vh;
        justify-content: space-between;

        strong {
            font-size: clamp(1.0rem, 3.0vw, 1.2rem);
            font-weight: 700;
        }
    }
`;

export const HoldingValue = styled.div`
    font-size: clamp(0.8rem, 3.0vw, 1.2rem);
    font-weight: bold;
    color: ${({ theme }) => theme.gray.black};

    div {
        display: flex;
        justify-content: space-between;
        margin-top: 1.8vh;

        strong {
            font-size: clamp(1.0rem, 3.0vw, 1.2rem);
            font-weight: 700;
        }
    }
`;

export const DepositButton = styled.button`
    background-color: ${({ theme }) => theme.primary.pu2};
    color: ${({ theme }) => theme.primary.pu1};
    width: 100%;
    padding: 4.8vw;
    border: none;
    border-radius: 12px;
    font-size: clamp(1.5rem, 4.0vw. 4.0rem);
    font-weight: bold;
    margin-top: 2vh;
`;
