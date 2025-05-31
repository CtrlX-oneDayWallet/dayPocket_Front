import styled from "styled-components";

export const Card = styled.div`
    background-color: ${({ theme }) => theme.gray.gy1};
    border-radius: 22px;
    display: flex;
    padding: 3vw 6vw;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 4vw;
`;

export const IconWrapper = styled.div`
    width: 10vw;
    height: 10vw;
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