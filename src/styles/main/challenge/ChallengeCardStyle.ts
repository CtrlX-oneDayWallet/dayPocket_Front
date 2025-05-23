import styled from "styled-components";

export const Card = styled.div`
    background-color: ${({ theme }) => theme.gray.gy1};
    border-radius: 22px;
    padding: 5vw 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 62px;
    transition: background-color 0.3s;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 4vw;
`;

export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end
`;

export const IconWrapper = styled.div`
    width: 8vw;
    height: 8vw;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const Label = styled.div`
    font-size: clamp(0.8rem, 3.0vw, 2.0rem);
    font-family: 'Inter';
    font-weight: 600;
    color: ${({ theme }) => theme.gray.gy6};

    @media screen and (max-width: 370px) {
        font-size: 13px;
    }
`;

export const Reward = styled.div`
    background-color: #CDCFF6;
    font-size: clamp(0.7rem, 2.5vw, 1.1rem);
    width: 42px;
    height: 18px;
    color: ${({ theme }) => theme.primary.pu1};
    font-family: 'Inter';
    text-align: center;
    white-space: nowrap;
    line-height: 1;
    justify-content: center;
    font-weight: 600;
    padding: 4px 4px;
    border-radius: 4px;

    & > strong {
        margin-left: 1px;
    }
    & > span {
        font-weight: 600;
    }
`;
