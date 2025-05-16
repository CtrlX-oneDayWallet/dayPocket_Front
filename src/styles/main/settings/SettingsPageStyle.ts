import styled from "styled-components";


export const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 37px;
    
    @media screen and (max-width: 370px) {
        padding: 1px;
    }
`;

export const Title = styled.h2`
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.gray.gy6};
    text-align: left;
    font-family: 'Inter';
    padding: 32px 20px 0;
    line-height: 1.5;
    margin-top: 10px;

    @media screen and (max-width: 370px) {
        font-size: 22px;
    }
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
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 2px;
`;

export const CardBox = styled.div`
    width: 100dv;
    background-color: ${({ theme }) => theme.gray.white};
    border-radius: 22px;
    padding: 20px;
    margin-top: 2px;
    display: flex;
    flex-direction: column;
    min-height: 240px;
    gap: 22px;
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

        @media screen and (max-width: 370px) {
            width: 179px;
            height: 187px;
        }
    }
`;
