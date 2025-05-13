import styled from "styled-components";

export const CardContainer = styled.div`
    background: white;
    border-radius: 16px;
    padding: 20px;
    margin-bottom: 24px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h3`
    font-size: 18px;
    font-weight: bold;
`;

export const Description = styled.p`
    font-size: 13px;
    color: #666;
    margin-bottom: 12px;
`;

export const Section = styled.div`
    margin-bottom: 12px;
`;

export const Label = styled.div`
    font-size: 14px;
    margin-bottom: 4px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    ustify-content: space-between;
`;

export const Value = styled.div<{ color: string }>`
    font-size: 16px;
    font-weight: bold;
    color: ${({ color }) => color};
    width: 80px;
`;

export const BarWrapper = styled.div`
    background-color: #f0f0f0;
    border-radius: 10px;
    height: 8px;
    flex: 1;
    margin-left: 12px;
`;

export const Bar = styled.div<{ width: number; color: string }>`
    height: 100%;
    border-radius: 10px;
    background-color: ${({ color }) => color};
    width: ${({ width }) => width}%;
`;

export const GraphSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;

export const GraphBox = styled.div`
    flex: 1;
    background-color: #f9f9f9;
    border-radius: 12px;
    padding: 12px;
    margin-right: 8px;

    &:last-child {
        margin-right: 0;
    }
`;

export const SubLabel = styled.div`
    font-size: 13px;
    color: #777;
    margin-bottom: 4px;
`;

export const Metric = styled.div`
    font-size: 14px;
    font-weight: bold;
    line-height: 1.4;
`;

export const Avg = styled.div`
    font-size: 12px;
    color: #aaa;
    margin-top: 4px;
`;
