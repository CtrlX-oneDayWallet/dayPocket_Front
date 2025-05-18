import styled from "styled-components";


export const PageWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 6vh 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;

export const Title = styled.h2`
  font-size: clamp(1.2rem, 5vw, 2.0rem);
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
  font-family: 'Inter';
  padding: 32px 20px 0;
  line-height: 1.5;
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

export const CoinWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    & > svg {
      width: 50vw;
      height: auto;
    }
`;
