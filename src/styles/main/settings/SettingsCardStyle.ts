import styled from "styled-components";

export const Card = styled.div`
    width: 326px;
    background-color: ${({ theme }) => theme.gray.gy1};
    border-radius: 22px;
    display: flex;
    padding: 20px 24px;
    justify-content: space-between;
    align-items: center;
    min-height: 66px;
    transition: background-color 0.3s;

    @media screen and (max-width: 370px) {
        padding: 14px 16px;
    }
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const IconWrapper = styled.div`
    width: 38px;
    height: 38px;
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
    color: ${({ theme }) => theme.gray.gy6};

    @media screen and (max-width: 370px) {
        font-size: 13px;
    }
`;