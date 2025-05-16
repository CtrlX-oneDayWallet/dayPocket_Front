import styled from "styled-components";


export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  
  @media screen and (max-width: 390px) {
    padding: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: ${({ theme }) => theme.gray.gy6};
  text-align: center;
  font-family: 'Inter';
  padding: 32px 20px 0;
  line-height: 1.5;
  margin-top: 40px;

  @media screen and (max-width: 390px) {
    font-size: 22px;
  }
`;

export const CardBox = styled.div`
    width: 100vw;
    background-color: ${({ theme }) => theme.gray.white};
    border-radius: 22px;
    padding: 20px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    min-height: 360px;
    gap: 22px;
`;

export const CoinWrapper = styled.div`
    width: 179px;
    height: 187px;
    margin-top: 5px;
    & > svg {
      width: 179px;
      height: 187px;

      @media screen and (max-width: 390px) {
        width: 179px;
        height: 187px;
      }
    }
`;
