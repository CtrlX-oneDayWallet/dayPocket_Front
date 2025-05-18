import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme.gray.white};
    justify-content: space-between;
    border-radius: 1.375rem;
    padding: 7vw;
    gap: 1.3rem;
    width: 100%;
    height: 60vh;
`;

export const Title = styled.h3`
    font-family: 'Inter';
    font-size: 1.12rem;
    font-weight: 600;
    margin-bottom: -4vh;
`;

export const Description = styled.p`
    font-family: 'Inter';
    font-weight: 600;
    font-size: 0.81rem;
    color: #6C7278;
`;

export const MetricSection = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 1vh;
    margin-top: -1vh;
`;

export const MetricRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vh;
`;

export const LabelText = styled.div`
    font-size: 1rem;
    font-weight: 600;
    color: ${({ color }) => color};
`;

export const ValueText = styled.div<{ color: string }>`
    font-family: "Inter";
    font-size: 1.375rem;
    font-weight: 600;
    color: ${({ color }) => color};
`;

export const BarBackground = styled.div`
    width: 100%;
    height: 2.7vh;
    background-color: #F1F1F1;
    border-radius: 1.375rem;
    overflow: hidden;

`;

export const Bar = styled.div<{ width: number; color: string }>`
    width: ${({ width }) => width}%;
    height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 1.375rem;
    transition: width 0.6s ease;
`;

export const CardPairSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1vh;
    margin-top: 1vh;
`;

export const CardWrapper = styled.div`
    display: flex;
    flex: 1;
    background-color: #F1F1F1;
    justify-content: flex-start;
    align-items: center;
    border-radius: 1.375rem;
    height: 25vh;
    padding: 6vw;
    flex-direction: column;
    gap: 7vh;
`;

export const CardTitle = styled.h3`
    font-family: "Inter";
    font-weight: 600;
    position: relative;
    font-size: clamp(10px, 3vw, 18px);
    right: 12%;
    top: 1%;
`;

export const GraphWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    gap: 6vh;
`;

export const BarGraphArea = styled.div`
    width: 1%;
    height: 10vh;
    display: flex;
    align-items: flex-end;
    gap: 1vw;
    padding: 0 1vw;
`;

export const BarGraph = styled.div<{ height: number; color: string }>`
    height: ${({ height }) => `${height}%`};
    background-color: ${({ color }) => color};
    border-radius: 10px;
    position: relative;
    padding: 1.5vh;
    display: flex;
    flex-direction: row;
    transition: height 0.3 ease;
`;

// ✅ 공통 바 텍스트
export const BarText = styled.div`
    font-family: "Inter";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 105%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: nowrap;

    span {
        color: #2B2B2B;
        font-size: 10px;
        font-weight: 600;
    }

    strong {
        font-size: 16px;
        font-weight: 600;
        color: ${({ color }) => color || "#333"};
    }
`;

export const AvgBarText = styled.div`
    font-family: "Inter";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 105%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 12px;
    color: #6C7278;
    white-space: nowrap;
    
    span {
        font-weight: 600;
    }
`;