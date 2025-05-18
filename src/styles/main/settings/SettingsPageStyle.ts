import styled from "styled-components";


export const PageWrapper = styled.div`
    padding: 6vh 5vw;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vh
`;

export const Title = styled.h2`
    font-size: clamp(1.2rem, 5vw, 2.0rem);
    font-weight: 600;
    color: ${({ theme }) => theme.gray.gy6};
    text-align: left;
    font-family: 'Inter';
    padding: 32px 20px 0;
    line-height: 1.5;
`;

export const Phone = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.gray.gy6};
    text-align: left;
    font-family: 'Inter';
    padding: 0px 20px 0;
`;

export const Left = styled.div`
    align-self: flex-start;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 0.2rem;
`;

export const CardBox = styled.div`
    width: 111%;
    background-color: #ffffff;
    border-radius: 22px;
    padding: 4vh 4vh;
    display: flex;
    flex-direction: column;
    gap: 3vh;
`;

export const ProfileWrapper = styled.div`
    width: 179px;
    height: 187px;
    margin: 24px auto;
    width: fit-content;
    margin-top: 24px;
    margin-bottom: 12px;
    & > svg {
        width: 179px;
        height: 187px;
    }
`;
