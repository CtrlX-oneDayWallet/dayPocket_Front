import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 12px;
    margin-top: 16px;
`;

export const SummaryBox = styled.div`
    flex: 1;
    background-color: #f9f9f9;
    border-radius: 12px;
    padding: 16px;
    box-shadow: inset 0 0 0 1px #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.div`
    font-size: 13px;
    color: #666;
    margin-bottom: 6px;
`;

export const Metric = styled.div`
    font-size: 15px;
    font-weight: 600;
`;

export const Value = styled.div`
    font-size: 18px;
    font-weight: bold;
    color: #5f7df8;
    margin: 4px 0;
`;

export const Average = styled.div`
    font-size: 12px;
    color: #999;
`;
