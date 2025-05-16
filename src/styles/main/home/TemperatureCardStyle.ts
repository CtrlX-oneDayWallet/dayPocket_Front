import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    gap: 14px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.gray.white};
    justify-content: space-between;
    border-radius: 22px;
    padding: 20px;

    @media screen and (max-width: 390px) {
        padding: 16px;
        gap: 16px;
    }
`;

export const Title = styled.h3`
    font-family: 'Inter';
    font-size: 18px;
    font-weight: bold;
    margin-bottom: -8px;
`;

export const Description = styled.p`
    font-family: 'Inter';
    font-weight: bold;
    font-size: 13px;
    color: ${({ theme }) => theme.gray.gy4};
    margin-bottom: 1px;
`;

export const MetricSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;

    @media screen and (max-width: 390px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const MetricRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
`;

export const LabelText = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: ${({ color }) => color};
`;

export const ValueText = styled.div<{ color: string }>`
    font-family: "Inter";
    font-size: 22px;
    font-weight: bold;
    color: ${({ color }) => color};
`;

export const BarBackground = styled.div`
    width: 100%;
    height: 20px;
    background-color: ${({ theme }) => theme.gray.gy1};
    border-radius: 22px;
    overflow: hidden;
    margin-bottom: 12px;
`;

export const Bar = styled.div<{ width: number; color: string }>`
    width: ${({ width }) => width}%;
    height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 4px;
    transition: width 0.6s ease;
`;

export const CardPairSection = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    margin-top: 12px;
    
    @media screen and (max-width: 390px) {
        gap: 10px;
    }
`;

// ✅ 공통 카드 레이아웃
export const CardWrapper = styled.div`
    display: flex;
    flex: 1;
    background-color: ${({ theme }) => theme.gray.gy1};
    justify-content: flex-start;
    align-items: center;
    border-radius: 22px;
    padding: 16px;

    @media screen and (max-width: 390px) {
        min-height: 200px;
        flex-direction: column;
        padding: 8px;
        gap: 12px;
    }
`;

export const CardTitle = styled.h3`
    font-family: "Inter";
    font-weight: 600;
    position: relative;
    right: 5%;
    top: 4%;
    margin-bottom:px;

    @media screen and (max-width: 390px) {
        font-size: 14px;
    }
`;

export const GraphWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: flex-end;
    @media screen and (max-width: 390px) {
        gap: 38px;
        margin-bottom: 10px;
    }
`;

// ✅ 온도 그래프 스타일
export const BarGraph = styled.div<{ height: number; color: string }>`
    flex: 1;
    height: ${({ height }) => height}px;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    position: relative;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    @media screen and (max-width: 390px) {
        min-width: 25px;
        max-height: 100px;
        padding: 8px;
    }
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
        color: ${({ theme }) => theme.gray.gy6};
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
    color: ${({ theme }) => theme.gray.gy4};
    white-space: nowrap;
    
    span {
        font-weight: 600;
    }
`;